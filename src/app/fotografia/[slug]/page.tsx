import Navigation from "@/components/Navigation";
import { projetos } from '@/data/Projetos';
import { notFound } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface FotografiaPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function FotografiaPage({ params }: FotografiaPageProps) {
    const { slug } = await params;

    // Encontrar o projeto de fotografia pelo slug
    const fotografia = projetos.fotografia.find(item => item.slug === slug);

    // Se não encontrar o projeto, mostrar página 404
    if (!fotografia) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center w-full min-h-screen">
            <Navigation />

            {/* Container principal com padding responsivo */}
            <div className="w-full max-w-7xl flex flex-col gap-8 pt-24 px-4 sm:px-6 md:px-8 pb-12">

                {/* Breadcrumb */}
                <Breadcrumb>
                    <BreadcrumbList>
                        <Link
                            href="/fotografia"
                            className="flex items-center gap-2 transition-colors w-fit"
                        >
                            <ArrowLeft size={20} />
                            <span>Voltar</span>
                        </Link>
                        <span>|</span>
                        Você está em:
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link className="underline" href="/">Início</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link className="underline" href="/fotografia">Fotografia</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{fotografia.titulo}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Botão de voltar */}


                {/* Título */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl md:text-6xl font-bold">{fotografia.titulo}</h1>
                </div>

                {/* Descrição */}
                <div className="max-w-4xl mx-auto space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center">Sobre o Projeto</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            {fotografia.descricao}
                        </p>
                    </div>
                </div>

                {/* Galeria de Fotos */}
                {fotografia.galeria && fotografia.galeria.length > 0 && (
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl md:text-3xl font-semibold">Galeria</h3>
                            <div className="h-1 w-16 bg-gray-400 mx-auto"></div>
                        </div>

                        {/* Grid de fotos com layout masonry */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {fotografia.galeria.map((foto, index) => (
                                <div key={index} className="relative aspect-[4/5] overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src={foto}
                                        alt={`${fotografia.titulo} - Foto ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Navegação para outros projetos de fotografia */}
                <div className="mt-16 space-y-8">
                    <div className="text-center space-y-2">
                        <h3 className="text-2xl md:text-3xl font-semibold">Outros Projetos</h3>
                        <div className="h-1 w-16 bg-gray-400 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projetos.fotografia
                            .filter(item => item.slug !== slug)
                            .map((item, index) => (
                                <Link href={`/fotografia/${item.slug}`} key={index}>
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

// Gerar páginas estáticas para todos os projetos de fotografia
export async function generateStaticParams() {
    return projetos.fotografia.map((fotografia) => ({
        slug: fotografia.slug,
    }));
}

// Metadata dinâmica para SEO
export async function generateMetadata({ params }: FotografiaPageProps) {
    const { slug } = await params;
    const fotografia = projetos.fotografia.find(item => item.slug === slug);

    if (!fotografia) {
        return {
            title: 'Projeto não encontrado',
        };
    }

    return {
        title: `${fotografia.titulo} - Bemov`,
        description: fotografia.descricao.substring(0, 160) + '...',
    };
}