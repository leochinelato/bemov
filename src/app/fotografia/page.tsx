import Navigation from "@/components/Navigation";
import { projetos } from '@/data/Projetos';
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fotografia - Bemov',
  description: 'Explore nosso portfólio fotográfico com ensaios, retratos e documentação de projetos musicais e artísticos.',
  keywords: ['fotografia', 'ensaio fotográfico', 'retratos', 'still', 'documentação', 'música'],
};

export default function Fotografia() {

  return (
    <div className="flex flex-col items-center w-full">
      <Navigation />

      {/* Container principal com padding responsivo */}
      <div
        className="w-full max-w-7xl flex flex-col items-center gap-10 pt-24 px-4 sm:px-6 md:px-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Fotografia</h1>

        {/* Layout em Grid para os cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {projetos.fotografia.map((item, index) => (
            // Card com largura total e aspect ratio
            <Link href={`/fotografia/${item.slug}`} key={index}>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={item.capa}
                  alt={item.titulo}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Contêiner de texto com altura máxima e scroll */}
                <div 
                  className="absolute bottom-0 left-0 w-full p-5 
                             bg-gradient-to-t from-black/95 to-transparent
                             max-h-[30%] overflow-y-auto"
                >
                  <h1 className="text-xl md:text-2xl font-bold text-white">{item.titulo}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}