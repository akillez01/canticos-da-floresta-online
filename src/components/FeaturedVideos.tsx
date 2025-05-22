
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dados de exemplo
const featuredVideos = [
  {
    id: 'video1',
    title: 'Hino "Eu Peço": Encontro de Cânticos da Floresta 2024',
    description: 'Uma interpretação coletiva do hino "Eu Peço", realizada no último encontro na Casa de São Miguel.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'hinario',
  },
  {
    id: 'video2',
    title: 'Ritual de Abertura: Instrumentos Tradicionais',
    description: 'Demonstração dos instrumentos utilizados nos rituais do Santo Daime e sua importância simbólica.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'pratica',
  },
  {
    id: 'video3',
    title: 'Entrevista: Dona Francisca sobre a História do Daime',
    description: 'Relatos de uma das mais antigas integrantes da comunidade sobre as origens dos cânticos.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'entrevista',
  },
];

const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'hinario', label: 'Hinários' },
  { value: 'pratica', label: 'Práticas' },
  { value: 'entrevista', label: 'Entrevistas' },
];

const FeaturedVideos = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredVideos = activeCategory === 'all' 
    ? featuredVideos 
    : featuredVideos.filter(video => video.category === activeCategory);

  return (
    <section id="videos" className="bg-forest-50 px-4 py-16 dark:bg-forest-900/60 md:py-24">
      <div className="container">
        <h2 className="text-center font-playfair text-3xl font-semibold text-forest-800 dark:text-forest-200 md:text-4xl">
          Vídeos em Destaque
        </h2>
        
        <p className="mx-auto mt-4 max-w-2xl text-center text-forest-600 dark:text-forest-300">
          Conheça nossos registros audiovisuais mais recentes ou explore o acervo completo através das categorias.
        </p>
        
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
          
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map(video => (
              <div 
                key={video.id} 
                className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg dark:bg-forest-800/80"
              >
                <div className="video-container">
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-t-lg"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="mb-2 font-playfair text-lg font-semibold text-forest-800 dark:text-forest-100">
                    {video.title}
                  </h3>
                  <p className="mb-4 text-sm text-forest-600 dark:text-forest-300">
                    {video.description}
                  </p>
                  
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
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/acervo">
              <Button variant="outline" className="group">
                Ver todo o acervo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedVideos;
