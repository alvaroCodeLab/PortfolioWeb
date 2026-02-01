"use client";

import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(90.21deg,rgba(10,10,40,0.8)_-5.91%,rgba(0,30,80,0.7)_50%,rgba(0,60,120,0.6)_111.58%)]">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
