import Navigation from "@/components/Navigation";

export default function Loading() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Navigation />
      
      <div className="w-full max-w-6xl flex flex-col gap-8 pt-24 px-4 sm:px-6 md:px-8 pb-12">
        
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 text-sm">
          <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Botão de voltar skeleton */}
        <div className="flex items-center gap-2 w-fit">
          <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Título skeleton */}
        <div className="text-center space-y-2">
          <div className="h-12 w-96 bg-gray-200 rounded mx-auto animate-pulse"></div>
          <div className="h-1 w-24 bg-gray-200 mx-auto animate-pulse"></div>
        </div>

        {/* Vídeo skeleton */}
        <div className="w-full aspect-video rounded-xl bg-gray-200 animate-pulse"></div>

        {/* Descrição skeleton */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Outras captações skeleton */}
        <div className="mt-16 space-y-8">
          <div className="text-center space-y-2">
            <div className="h-8 w-40 bg-gray-200 rounded mx-auto animate-pulse"></div>
            <div className="h-1 w-16 bg-gray-200 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}