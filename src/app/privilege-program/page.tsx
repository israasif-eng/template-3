import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { dealer } from "@/components/home/data";

export const metadata: Metadata = {
  title: "Privilege Program | Supreme Dealer",
  description:
    "To thank you for your loyalty, Supreme Dealer invites you to take full advantage of a smart way to save, already trusted by many of our customers!",
};

const bonusPoints = [
  "5,000 points upon activation of your account.",
  "100,000 points for referring a friend (for the purchase of a vehicle).",
  "1,000 points for liking our Facebook page.",
  "1,000 points for a satisfaction survey.",
  "10,000 points for making a Google review.",
  "10,000 points for answering the manufacturer's survey.",
];

const levels = [
  { level: "Gold", discount: "10% off discount", spend: "$0 – $1,499.99" },
  { level: "Platinum", discount: "15% off discount", spend: "$1,500 & more" },
];

export default function PrivilegeProgramPage() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
      </div>

      {/* Page heading */}
      <div className="bg-[#f8f8f8]">
        <div className="site-container py-8">
          <h1 className="text-4xl font-extrabold uppercase text-main">
            {dealer.name} Privilege Program
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="site-container py-4">
        <div className="max-w-4xl space-y-6 text-main">
          <p>
            To thank you for your trust in us, <strong>{dealer.name}</strong> is offering you a new
            way to save.
          </p>

          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-extrabold uppercase">My Account</h2>
            <p className="mt-2">
              Take full advantage of your membership in the {dealer.name} Privilege Program. Enjoy
              your cashbacks, discount coupons, and the opportunity to earn rewards for your online
              activities. Log in below to check your balance or earn even more bonus points!
            </p>
            <a href="/contact" className="btn-primary mt-4">
              Login
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold uppercase">How does it work?</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Get 5% off before tax on your service and parts department purchase*.</li>
              <li>
                Receive 1,000 points for every dollar spent* which will accumulate in your VIP
                account.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold uppercase">Levels</h2>
            <p className="mt-2">
              Level up to <strong>PLATINUM</strong> to earn 15% back in purchases on every
              qualifying transaction. Keep this status for 1 year depending on your annual purchase
              total.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b bg-[#f8f8f8] text-main">
                    <th className="p-3 font-extrabold uppercase">Levels</th>
                    <th className="p-3 font-extrabold uppercase">Discount</th>
                    <th className="p-3 font-extrabold uppercase">Cumulative yearly purchases</th>
                  </tr>
                </thead>
                <tbody>
                  {levels.map((l) => (
                    <tr key={l.level} className="border-b">
                      <td className="p-3 font-bold text-primary">{l.level}</td>
                      <td className="p-3">{l.discount}</td>
                      <td className="p-3">{l.spend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Upon reaching the cumulative amount of purchases required by the higher level, the new
              discount level will be obtained from the next purchase and retained for the following
              year. Subsequently, a requalification to maintain or change status will be required.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-extrabold uppercase">Plus, earn bonus points for:</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              {bonusPoints.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold uppercase">How to spend your points?</h2>
            <p className="mt-2">
              You can use your points at any time in increments of $20 before taxes* in our Parts
              &amp; Accessories, boutique or service departments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold uppercase">How to sign up?</h2>
            <p className="mt-2">
              Ask one of our advisors to enroll you in the program at your next visit, or{" "}
              <a href="/contact" className="text-primary underline hover:no-underline">
                do it yourself online
              </a>
              . There are no enrollment fees.
            </p>
          </div>

          <p className="text-sm text-main-300">
            *Some exclusions may apply. Details and conditions in store, subject to change without
            notice.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
