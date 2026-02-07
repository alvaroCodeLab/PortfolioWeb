"use client";

import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(90deg,rgba(5,10,30,1)_0%,rgba(0,0,0,1)_100%)]">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
