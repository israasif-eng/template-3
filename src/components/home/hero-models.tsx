"use client";

import { useEffect, useRef, useState } from "react";

// The three showcase models, cycled one after another in the hero.
const MODELS = [
  "/models/sportsbike.glb",
  "/models/snowbike.glb",
  "/models/quadzilla.glb",
];

const SWITCH_MS = 10000; // each bike is shown for 10s, then transitions

// Repaint the Quadzilla's 4 materials to match the sport bike's palette:
// [red body, chrome frame, black tires, dark engine] — colours and paint
// finish (metalness/roughness) copied from the sport bike's materials.
const QUADZILLA_PAINT: {
  color: number[];
  metallic: number;
  roughness: number;
}[] = [
  { color: [0.0, 0.0, 0.0, 1], metallic: 0, roughness: 0.7 }, // 0: tires / dark plastics -> tire_sw
  { color: [0.83, 0.83, 0.83, 1], metallic: 1, roughness: 0.05 }, // 1: frame -> chrome
  { color: [0.77, 0.0, 0.0, 1], metallic: 0, roughness: 0.35 }, // 2: body -> paintRed
  { color: [0.08, 0.08, 0.08, 1], metallic: 0.6, roughness: 0.3 }, // 3: engine -> metal_black
];

// Rendered with Google's <model-viewer>, using the exact same parameters as
// the Porsche hero in the sister project: 24°/s auto-rotate, a fixed 35°/78°
// camera orbit with the polar angle locked (so rotation is horizontal-only),
// zoom/pan disabled, and neutral studio lighting. Hovering pauses the spin so
// the model can be dragged, then it resumes on leave.
export function HeroModels() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  // Show each bike for SWITCH_MS, then advance to the next — but never while
  // the user is inspecting one (hover pauses the cycle).
  useEffect(() => {
    const id = window.setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % MODELS.length);
    }, SWITCH_MS);
    return () => window.clearInterval(id);
  }, []);

  // Hover pauses auto-rotate so the model can be dragged freely, then resumes
  // once the cursor leaves — identical to the Porsche hero.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const stop = () => {
      pausedRef.current = true;
      el.removeAttribute("auto-rotate");
    };
    const resume = () => {
      pausedRef.current = false;
      el.setAttribute("auto-rotate", "");
    };
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", resume);
    return () => {
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  // Crossfade between models: drop opacity on switch, fade back in on load.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    const onLoad = () => {
      el.style.opacity = "1";
      // Quadzilla only: repaint its materials to match the sport bike's
      // palette. Other models have their own materials and are left alone.
      if (MODELS[index].includes("quadzilla")) {
        const mv = el as unknown as {
          model?: {
            materials?: {
              pbrMetallicRoughness?: {
                setBaseColorFactor?: (c: number[]) => void;
                setMetallicFactor?: (n: number) => void;
                setRoughnessFactor?: (n: number) => void;
              };
            }[];
          };
        };
        const mats = mv.model?.materials;
        if (mats) {
          QUADZILLA_PAINT.forEach((p, i) => {
            const pbr = mats[i]?.pbrMetallicRoughness;
            pbr?.setBaseColorFactor?.(p.color);
            pbr?.setMetallicFactor?.(p.metallic);
            pbr?.setRoughnessFactor?.(p.roughness);
          });
        }
      }
    };
    el.addEventListener("load", onLoad);
    return () => el.removeEventListener("load", onLoad);
  }, [index]);

  return (
    <model-viewer
      ref={ref}
      suppressHydrationWarning
      src={MODELS[index]}
      alt="Supreme Dealer 3D vehicle showcase"
      camera-controls=""
      auto-rotate=""
      auto-rotate-delay="0"
      rotation-per-second="36deg"
      interaction-prompt="none"
      autoplay=""
      disable-zoom=""
      disable-pan=""
      exposure="1.1"
      shadow-intensity="0.9"
      camera-orbit="35deg 78deg 80%"
      min-camera-orbit="auto 78deg auto"
      max-camera-orbit="auto 78deg auto"
      environment-image="neutral"
      className="absolute inset-0"
      style={{
        width: "100%",
        height: "100%",
        opacity: 0,
        transition: "opacity 500ms ease",
      }}
    ></model-viewer>
  );
}
