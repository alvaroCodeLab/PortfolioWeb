import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/timeline/timeline";

const AboutContent = () => {
  return (
    <ContainerPage>
      <Avatar />

      <h2 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mt-10">
        Toda mi{" "}
        <span className="font-bold text-emerald-400">
          trayectoria profesional
        </span>
      </h2>

      <TimeLine />
    </ContainerPage>
  );
};

export default AboutContent;