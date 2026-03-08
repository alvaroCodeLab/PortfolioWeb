import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { title, image, urlDemo, urlGithub } = data;

  return (
    <div className="p-4 border border-teal-50 rounded-xl group">
      <h3 className="mb-4 text-xl">{title}</h3>

      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={`Proyecto ${title}`}
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex gap-5 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
        >
          Github
        </Link>

        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          Live demo
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;