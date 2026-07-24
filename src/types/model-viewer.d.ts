import type { DetailedHTMLProps, HTMLAttributes } from "react";

// Type declaration for Google's <model-viewer> custom element so it can be
// used in TSX. All model-viewer attributes are plain string/boolean HTML
// attributes, so we allow the standard HTML attribute set plus any extra
// kebab-case attributes the element accepts.
type ModelViewerAttributes = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  [attribute: string]: unknown;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerAttributes;
    }
  }
}
