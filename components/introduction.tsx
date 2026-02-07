import { Link } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <section className="relative z-20 w-full min-h-screen flex items-center">
      <div className="grid w-full max-w-7xl mx-auto px-6 md:grid-cols-2 items-center">
        
        {/* Imagen - lado izquierdo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/home.png"
            alt="Programming 3D illustration"
            width={700}
            height={700}
            priority
            className="w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Aquí luego irá el texto */}
        <div className="flex flex-col justify-center max-w-md">
            <h1 className="mw-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br />
                <TypeAnimation
                    sequence={[
                        "puedes programarlo",
                        1000,
                        "puedes optimizarlo",
                        1000,
                        "puedes implementarlo",
                        1000,
                        "puedes desarrollarlo",
                        100
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-emerald-400" 
                
                />
            </h1>

            <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                Como desarrollador fontend y creador de contenido, me dedico a conmbinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
            </p>

            <div className="flex items-center gap-3md: justify-start md:gap-10">
                <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                    Ver Proyectos
                </Link>
            </div>
          
        </div>

      </div>
    </section>
  );
};

export default Introduction;
