
import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre mi" subtitle="Conóceme" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* CAROUSEL */}
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[300px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={500} height={500}
                                            className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4"
                    >
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8"> Soy un desarrollador desafiante que encuentra
                        inspiración entre líneas de código y algoritmos la moticacion para seguir la carrera
                        programancion.
                        Cuando no estoy inmerso en la programación, disfruto del tiempo con la familia, jugar videojuegos,
                        ademas estoy firmemente en mantener un equilibrio entre
                        mente, energia y cuerpo. Además, soy un ávido lector, principalmente en las historias de drama y suspenso
                        y pedro igual en crecimiento personal.
                        En las redes sociales, no comparto muchas cosas ya que me gusta mantener un perfil normal en mi vida, pero
                        igual buscando una forma de generar nuevas ideas y proyectos, pero igual estoy disponible
                        para conectar con otros apasionados del desarrollo de software.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;