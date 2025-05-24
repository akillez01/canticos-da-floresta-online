import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Dados de exemplo
export const featuredVideos = [
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
  },
  {
    id: 'video4',
    title: 'CABOCLO BOIADEIRO - Emilio Dias e Talita Luz',
    description: `Sou boiadeiro
Vim trazer minha boiada
Porque sou filho de Deus
Vou seguir minha jornada 

Venho chegando, cavalgando
E com meu pito na boca
Eu não tenho medo de nada

Sertão, catinga, campina 
Campo, pradaria
Nesta divina terra
De minha Santa Maria

Eu agradeço 
Agradecendo todo dia
Louvando o grande Sol
No pino do meio dia

Eu chamo a força 
Da Rainha da Floresta 
Pedindo a seu Sete-flechas
Para nos abençoar 

Eu me despeço 
Com muita satisfação 
E com meu chapéu de couro
Vou-me embora da sessão.

Canal: Hinos do Santo Daime
Data: 13 de jan. de 2022
Céu do Vale

Compartilhe este vídeo:
🎯 https://www.youtube.com/watch?v=QBqoRaNHeL0

INDICAÇÕES DO CANAL

🎶 Partituras, Cifras e Tablaturas Emilio Dias
🎯 https://linktr.ee/partiturasemiliodias

📚 Livros do Santo Daime
🎯 https://linktr.ee/livrosdosantodaime

Este canal é independente e não intenciona infringir nenhum © direito autoral de quaisquer material aqui publicado. Nossa missão é auxiliar nos estudos e na boa expansão da Doutrina, prezando sempre a zeladoria dentro da Harmonia, do Amor, da Verdade e da Justiça.

Grupo Telegram Hinos do Santo Daime Oficial:
🎯 https://t.me/+hF15p5FylqhjZDMx

Compartilhe nossa Hashtag #euvimparaajuntar

"Hinos estão ensinando"
🎯 https://linktr.ee/hinosdosantodaimeof...

#euvimparaajuntar #hinosestaoensinando #hinosdosantodaime
`,
    youtubeId: 'QBqoRaNHeL0',
    category: 'hinario',
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
  },
];

const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'hinario', label: 'Hinários' },
  //{ value: 'pratica', label: 'Práticas' },
  { value: 'entrevista', label: 'Entrevistas' },
];

const MAX_DESCRIPTION_LENGTH = 320;

const FeaturedVideos = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const filteredVideos = activeCategory === 'all'
    ? featuredVideos
    : featuredVideos.filter(video => video.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

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
            {filteredVideos.map(video => {
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
                    <p className="mb-4 text-sm text-forest-600 dark:text-forest-300 whitespace-pre-line">
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

                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-medium text-forest-600 dark:bg-forest-700/50 dark:text-forest-200">
                        {categories.find(c => c.value === video.category)?.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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