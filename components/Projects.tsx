import { dataPortfolio } from "@/data";

import TransitionPage from "@/components/TransitionPage";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolioBox";
import ProjectsReveal from "@/components/ProjectsReveal";
import WordpressPages from "@/components/WordpressPages";

const Projects = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden">
      <ProjectsReveal />
      <ContainerPage>
        <TransitionPage />

        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
            Mis últimos{" "}
            <span className="font-bold text-emerald-500">
              trabajos realizados
            </span>
          </h1>

          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-8 pb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>

          <WordpressPages />
        </div>
      </ContainerPage>
    </section>
  );
};

export default Projects;