"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
    { src: "/carrosel/1.jpg", alt: "São joão" },
    { src: "/carrosel/2.jpg", alt: "Propaganda" },
    { src: "/carrosel/3.jpg", alt: "Divulgação" },
]

export default function Carrossel() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    return (
        <section className="w-full flex justify-center">
            <Carousel className="w-full relative"
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.reset()}
            >
                <CarouselContent>
                    {carrosselImagens.map((imagem, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-b-2xl">
                                <Image
                                    src={imagem.src}
                                    alt={imagem.alt}
                                    fill
                                    className="object-cover brightness-95 hover:brightness-100 transition-all duration-300"
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black border-0 backdrop-blur-sm transition-all duration-300 hover:shadow-lg" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black border-0 backdrop-blur-sm transition-all duration-300 hover:shadow-lg" />
            </Carousel>
        </section>
    )
}
