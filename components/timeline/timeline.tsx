import { dataAboutPage } from "@/data";
import TimelineItem from "./timeline-item";

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
        {/* Contenedor con glow */}
        <div
          className="
          relative rounded-xl p-6
          bg-black/40 backdrop-blur-md
          border border-cyan-400/40

          before:absolute before:inset-0
          before:rounded-xl
          before:shadow-[0_0_60px_rgba(0,255,255,0.55)]
          before:-z-10
        "
        >
          <div className="-my-6 divide-y divide-slate-700">
            {dataAboutPage.map((data) => (
              <TimelineItem key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;