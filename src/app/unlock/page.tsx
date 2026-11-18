import type { Metadata } from "next";
import { UnlockForm } from "./unlock-form";

export const metadata: Metadata = {
  title: "Tia Rexine",
  robots: { index: false, follow: false },
};

export default function UnlockPage() {
  return (
    <main className="dark-shell unlock-shell">
      <section className="unlock-card" aria-labelledby="unlock-title">
        <h1 id="unlock-title">Tia Rexine</h1>
        <p>This site is private. Enter the password to continue.</p>
        <UnlockForm />
      </section>
    </main>
  );
}
