
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import AccessibilityMenu from '@/components/AccessibilityMenu';

// Dados de exemplo para o acervo
const acervoVideos = [
  {
    id: 'video1',
    title: 'Hino "Eu Peço": Encontro de Cânticos da Floresta 2024',
    description: 'Uma interpretação coletiva do hino "Eu Peço", realizada no último encontro na Casa de São Miguel.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'hinario',
    date: '2024-03-15',
    location: 'Casa de São Miguel, Rio de Janeiro',
  },
  {
    id: 'video2',
    title: 'Ritual de Abertura: Instrumentos Tradicionais',
    description: 'Demonstração dos instrumentos utilizados nos rituais do Santo Daime e sua importância simbólica.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'pratica',
    date: '2023-12-10',
    location: 'Centro Eclético, Amazonas',
  },
  {
    id: 'video3',
    title: 'Entrevista: Dona Francisca sobre a História do Daime',
    description: 'Relatos de uma das mais antigas integrantes da comunidade sobre as origens dos cânticos.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'entrevista',
    date: '2024-01-22',
    location: 'Céu do Mapiá, Amazonas',
  },
  {
    id: 'video4',
    title: 'Hino "Flor das Águas": Encontro Anual',
    description: 'Interpretação do hino Flor das Águas durante o encontro anual dos musicistas da tradição.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'hinario',
    date: '2023-10-05',
    location: 'Céu do Mar, Rio de Janeiro',
  },
  {
    id: 'video5',
    title: 'Roda de Conversa: A Importância dos Cânticos na Tradição',
    description: 'Especialistas e membros antigos conversam sobre o papel central da música nos rituais.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'entrevista',
    date: '2023-09-18',
    location: 'Online',
  },
  {
    id: 'video6',
    title: 'Workshop de Maracá: Técnicas e Significados',
    description: 'Aprenda sobre as técnicas de execução do maracá e seu significado espiritual nos rituais.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'pratica',
    date: '2024-02-20',
    location: 'Centro Cultural, São Paulo',
  },
];

// Categorias para filtragem
const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'hinario', label: 'Hinários' },
  { value: 'pratica', label: 'Práticas' },
  { value: 'entrevista', label: 'Entrevistas' },
];

const Acervo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filtrar vídeos por categoria e termo de pesquisa
  const filteredVideos = acervoVideos
    .filter(video => activeCategory === 'all' || video.category === activeCategory)
    .filter(video => 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-forest-50 px-4 py-16 dark:bg-forest-900/80">
          <div className="container">
            <h1 className="text-center font-playfair text-4xl font-semibold text-forest-800 dark:text-forest-100 md:text-5xl">
              Acervo Audiovisual
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-forest-600 dark:text-forest-300">
              Explore nossa coleção de vídeos com registros de hinos, entrevistas, práticas musicais e documentários
              sobre a tradição do Santo Daime. Todos os vídeos contam com recursos de acessibilidade.
            </p>
            
            {/* Barra de pesquisa */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-forest-500" />
                <Input 
                  type="text" 
                  placeholder="Buscar vídeos por título, descrição ou local..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
              </div>
            </div>
            
            {/* Tabs para categorias */}
            <Tabs 
              defaultValue="all" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="mt-8"
            >
              <div className="flex justify-center">
                <TabsList className="bg-white/50 backdrop-blur-sm dark:bg-forest-800/50">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category.value}
                      value={category.value}
                      className="data-[state=active]:bg-white data-[state=active]:text-forest-800 dark:data-[state=active]:bg-forest-700 dark:data-[state=active]:text-white"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {/* Grid de vídeos */}
              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredVideos.length > 0 ? (
                  filteredVideos.map(video => (
                    <div 
                      key={video.id} 
                      className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg dark:bg-forest-800/80"
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                          src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="h-full w-full rounded-t-lg"
                        />
                      </div>
                      
                      <div className="p-5">
                        <h3 className="mb-2 font-playfair text-lg font-semibold text-forest-800 dark:text-forest-100">
                          {video.title}
                        </h3>
                        <p className="mb-3 text-sm text-forest-600 dark:text-forest-300">
                          {video.description}
                        </p>
                        
                        <div className="mb-3 flex items-center text-xs text-forest-500 dark:text-forest-400">
                          <span className="mr-3">{video.date}</span>
                          <span>{video.location}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-medium text-forest-600 dark:bg-forest-700/50 dark:text-forest-200">
                            {categories.find(c => c.value === video.category)?.label}
                          </span>
                          <Button variant="link" size="sm" className="p-0 text-forest-600 hover:text-forest-800 dark:text-forest-400 dark:hover:text-forest-200">
                            Ver detalhes
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                    <p className="text-lg font-medium text-forest-600 dark:text-forest-300">
                      Nenhum vídeo encontrado com esses critérios.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setSearchTerm('');
                        setActiveCategory('all');
                      }}
                      className="mt-4"
                    >
                      Limpar filtros
                    </Button>
                  </div>
                )}
              </div>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
};

export default Acervo;
