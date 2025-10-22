import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Navigation />
      
      <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8 pt-24 px-4 sm:px-6 md:px-8 text-center">
        
        {/* Código de erro */}
        <div className="text-6xl md:text-8xl font-bold text-gray-300">
          404
        </div>
        
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Projeto não encontrado
        </h1>
        
        {/* Descrição */}
        <p className="text-lg text-gray-600 max-w-2xl">
          O projeto de fotografia que você está procurando não existe ou foi removido. 
          Verifique se o link está correto ou volte para ver todos os projetos disponíveis.
        </p>
        
        {/* Botão de voltar */}
        <Link 
          href="/fotografia" 
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar para Fotografia</span>
        </Link>
        
      </div>
    </div>
  );
}