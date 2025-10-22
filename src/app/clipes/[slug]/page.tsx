'use client';

import Navigation from "@/components/Navigation";
import { projetos } from '@/data/Projetos';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Play } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ClipePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ClipePage({ params }: ClipePageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [slug, setSlug] = useState<string>('');

  // Resolver params de forma assíncrona
  useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  // Encontrar o clipe pelo slug
  const clipe = projetos.clipes.find(item => item.slug === slug);

  // Se não encontrar o clipe, retornar null enquanto carrega
  if (!slug || !clipe) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Navigation />

      {/* Container principal com padding responsivo */}
      <div className="w-full max-w-6xl flex flex-col gap-8 pt-24 px-4 sm:px-6 md:px-8 pb-12">
        
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/clipes">Clipes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{clipe.titulo}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Botão de voltar */}
        <Link 
          href="/clipes" 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors w-fit"
        >
          <ArrowLeft size={20} />
          <span>Voltar para Clipes</span>
        </Link>

        {/* Título */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold">{clipe.titulo}</h1>
          <div className="h-1 w-24 bg-black mx-auto"></div>
        </div>

        {/* Vídeo */}
        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl relative">
          {!isPlaying ? (
            // Mostrar capa com botão play
            <div 
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src={clipe.capa}
                alt={clipe.titulo}
                fill
                className="object-cover"
              />
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Botão Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          ) : (
            // Mostrar iframe do YouTube
            <iframe 
              className="w-full h-full"
              src={`${clipe.video}?autoplay=1`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          )}
        </div>

        {/* Descrição */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Sobre o Projeto</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-justify">
              {clipe.descricao}
            </p>
          </div>
        </div>

        {/* Navegação para outros clipes */}
        <div className="mt-16 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold">Outros Clipes</h3>
            <div className="h-1 w-16 bg-gray-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos.clipes
              .filter(item => item.slug !== slug)
              .map((item, index) => (
                <Link href={`/clipes/${item.slug}`} key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                      src={item.capa}
                      alt={item.titulo}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <h4 className="text-white font-semibold text-sm md:text-base line-clamp-2">{item.titulo}</h4>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}