import AccessibilityMenu from '@/components/AccessibilityMenu';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { useState } from 'react';

// Dados de exemplo para o acervo
const acervoVideos = [
  {
    id: 'video1',
    title: 'DEVO AMAR AQUELA LUZ - Mestre Irineu - Leo Fernandes & Irineu Barsé',
    description: `Hiino 30 - "Devo Amar Aquela Luz" do Hinário O Cruzeiro (Mestre Irineu).
Vídeo produzido por Léo Fernandes, participação de Irineu Barsé.
O Encontro Nacional de Músicos do Santo Daime está previsto para acontecer no 1° semestre de 2025.

Masterclasses, oficinas e workshops com temas relacionados à musicalidade da nossa Doutrina.  

Em breve mais informações!

Canal: Hinos do Santo Daime
Data: 26 de dez. de 2024
Mais informações: Instagram @encontro_nacional_musicos
Caderno de Hinários: https://hinosdosantodaimeoficial.com/...
Grupo Telegram: https://t.me/hinosdosantodaimeoficial
#santodaime #musica #daime #mestreirineu #hinosdosantodaime`,
    youtubeId: 'GzCfG5lX4EE',
    category: 'hinario',
    date: '2024-12-26',
    location: 'Canal Hinos do Santo Daime',
  },
  {
    id: 'video4',
    title: 'PRA QUÊ QUE EU TOMO DAIME? - Wilson Diamantino',
    description: `Hino 14 do hinário UMA NOVA ESTRELA

Se não me componho em meu lugar
Pra quê que eu tomo Daime
Se o outro eu quero julgar
Então pra quê que eu tomo Daime

...

Cantar Padrinho Sebastião
E não sair da falsidade
Viver em plena ilusão
Então pra quê que eu tomo Daime.

Canal: Hinos do Santo Daime
Data: 22 de mai. de 2025
Mais informações: https://hinosdosantodaimeoficial.com/
Grupo Telegram: https://t.me/hinosdosantodaimeoficial
#praquequeeutomodaime #wilsondiamantino #umanovaestrela #ceudanovaestrela #santodaimehino #hinosdosantodaime`,
    youtubeId: 'ysOrDxDZw5I',
    category: 'hinario',
    date: '2025-05-22',
    location: 'Canal Hinos do Santo Daime',
  },
  {
    id: 'video5',
    title: 'SÃO JOÃO NA TERRA - Documentário - Santo Daime na Colônia Cinco Mil/AC',
    description: `Depoimentos do Padrinho Wilson Carneiro e do Padrinho Sebastião na Colônia Cinco Mil

🎥 Arquivos da Doutrina

Canal: Hinos do Santo Daime
Data: 6 de nov. de 2013
Veja o acervo de fotos do Padrinho Sebastião no vídeo produzido por Marco Gracie, dirigente do Rainha do Mar.
Mais informações:
Livros sobre a Doutrina, Xamanismo e Espiritualidade: https://www.amazon.com.br/shop/hinosd...
Cifras, partituras e tablaturas para estudo: https://linktr.ee/partiturasdosantodaime

Este canal é independente e não intenciona infringir nenhum © direito autoral de quaisquer materiais aqui publicados. Nossa missão é auxiliar nos estudos e na boa expansão da Doutrina, prezando sempre a zeladoria dentro da Harmonia, do Amor, da Verdade e da Justiça.
Colaborador: @wilsondiamantino
#euvimparaajuntar #hinosestaoensinando #hinosdosantodaime #santodaime #padrinhosebastião`,
    youtubeId: 'qq-8_7iY_nY',
    category: 'entrevista',
    date: '2013-11-06',
    location: 'Canal Hinos do Santo Daime',
  },
];

// Categorias para filtragem
const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'hinario', label: 'Hinários' },
  //{ value: 'pratica', label: 'Práticas' },
  { value: 'entrevista', label: 'Entrevistas' },
];

const MAX_DESCRIPTION_LENGTH = 320;

const Acervo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  // Filtrar vídeos por categoria e termo de pesquisa
  const filteredVideos = acervoVideos
    .filter(video => activeCategory === 'all' || video.category === activeCategory)
    .filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

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
                  filteredVideos.map(video => {
                    const isExpanded = expanded[video.id];
                    const shouldTruncate = video.description.length > MAX_DESCRIPTION_LENGTH;
                    const displayDescription = isExpanded || !shouldTruncate
                      ? video.description
                      : video.description.slice(0, MAX_DESCRIPTION_LENGTH) + '...';

                    return (
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
                          <p className="mb-3 text-sm text-forest-600 dark:text-forest-300 whitespace-pre-line">
                            {displayDescription}
                            {shouldTruncate && (
                              <Button
                                variant="link"
                                size="sm"
                                className="ml-1 p-0 align-baseline"
                                onClick={() => toggleExpand(video.id)}
                              >
                                {isExpanded ? 'Mostrar menos' : 'Mostrar mais'}
                              </Button>
                            )}
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
                    );
                  })
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