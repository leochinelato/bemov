'use client';

import { ChevronDown } from 'lucide-react';
import React from 'react';

const Hero = () => {
    return (
        <main className="w-full h-screen flex items-center justify-center bg-[url('/fundos/breno-hero.png')] bg-no-repeat bg-center bg-contain">
            {/* Adicionado padding horizontal (px-6) para telas pequenas */}
            <div className="flex flex-col items-start cursor-default px-6">
                {/* Fonte menor em telas pequenas, maior em telas grandes */}
                <p className="text-lg sm:text-xl md:text-2xl">Eu sou o</p>
                
                {/* Título principal com múltiplos breakpoints para um ajuste suave */}
                <h1
                    className="my-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter"
                    style={{color: '#FFF'}}
                >
                    BE.MOV
                </h1>

                {/* Parágrafo com tamanho de fonte responsivo */}
                <p className='max-w-md text-sm sm:text-base'>
                    Aqui, apresento uma seleção dos meus trabalhos, proporcionando uma visão intimista da minha criatividade em ação e inspirando outros a explorarem sua própria expressão criativa.
                </p>
            </div>

            <button
                onClick={() => {
                    const element = document.getElementById("sobre-mim");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer flex flex-col items-center"
                aria-label="Scroll to expertise section"
            >
                <ChevronDown color='#afafaf' size={32} />
            </button>
        </main>
    );
};

export default Hero;