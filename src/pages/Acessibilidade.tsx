
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Eye, 
  Moon, 
  ZoomIn, 
  Volume2, 
  Keyboard, 
  Monitor,
  PanelLeft 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AccessibilityMenu from '@/components/AccessibilityMenu';

const Acessibilidade = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-forest-50 px-4 py-16 dark:bg-forest-900/80 md:py-20">
          <div className="container">
            <h1 className="text-center font-playfair text-4xl font-semibold text-forest-800 dark:text-forest-100 md:text-5xl">
              Acessibilidade
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-forest-600 dark:text-forest-300">
              Conheça as ferramentas e recursos disponíveis para tornar sua experiência 
              no Cânticos da Floresta mais inclusiva e acessível para todos.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="bg-white px-4 py-16 dark:bg-forest-900/50">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 rounded-xl bg-forest-50 p-6 dark:bg-forest-800/50">
                <h2 className="mb-4 font-playfair text-2xl font-medium text-forest-800 dark:text-forest-100">
                  Nosso Compromisso com a Acessibilidade
                </h2>
                <p className="mb-4 text-forest-700 dark:text-forest-200">
                  O projeto Cânticos da Floresta tem como missão tornar o rico patrimônio cultural 
                  e espiritual do Santo Daime acessível a todas as pessoas, independentemente de 
                  suas condições físicas, sensoriais ou cognitivas.
                </p>
                <p className="text-forest-700 dark:text-forest-200">
                  Nosso site segue as diretrizes de acessibilidade WCAG (Web Content Accessibility Guidelines) 
                  e está em constante aprimoramento para garantir uma experiência inclusiva.
                </p>
              </div>

              <Tabs defaultValue="visual" className="mb-12">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="visual">Visual</TabsTrigger>
                  <TabsTrigger value="auditiva">Auditiva</TabsTrigger>
                  <TabsTrigger value="motora">Motora</TabsTrigger>
                  <TabsTrigger value="cognitiva">Cognitiva</TabsTrigger>
                </TabsList>
                <TabsContent value="visual" className="mt-6 space-y-6">
                  <h3 className="font-playfair text-xl font-medium text-forest-800 dark:text-forest-100">
                    Recursos para Acessibilidade Visual
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Moon className="h-5 w-5" />
                          <span>Modo escuro</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Reduz a luz emitida pela tela e melhora o conforto visual, 
                          especialmente em ambientes com pouca luz.
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Eye className="h-5 w-5" />
                          <span>Alto contraste</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Aumenta a diferença entre cores de fundo e texto para facilitar 
                          a leitura para pessoas com baixa visão.
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <ZoomIn className="h-5 w-5" />
                          <span>Texto ampliado</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Permite aumentar o tamanho de todos os textos do site para 
                          melhor legibilidade.
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Monitor className="h-5 w-5" />
                          <span>Design responsivo</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          O site se adapta a diferentes tamanhos de tela, facilitando 
                          a navegação em dispositivos diversos.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="auditiva" className="mt-6 space-y-6">
                  <h3 className="font-playfair text-xl font-medium text-forest-800 dark:text-forest-100">
                    Recursos para Acessibilidade Auditiva
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Volume2 className="h-5 w-5" />
                          <span>Legendas em vídeos</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Todos os vídeos do nosso acervo contam com legendas em português, 
                          incluindo transcrições das letras dos hinos e falas.
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <PanelLeft className="h-5 w-5" />
                          <span>Transcrições de áudio</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Disponibilizamos transcrições textuais de áudios e podcasts 
                          para que o conteúdo seja acessível a todos.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="motora" className="mt-6 space-y-6">
                  <h3 className="font-playfair text-xl font-medium text-forest-800 dark:text-forest-100">
                    Recursos para Acessibilidade Motora
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Keyboard className="h-5 w-5" />
                          <span>Navegação por teclado</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Todo o site pode ser navegado usando apenas o teclado, 
                          sem necessidade do mouse, com foco visível e lógico.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="cognitiva" className="mt-6 space-y-6">
                  <h3 className="font-playfair text-xl font-medium text-forest-800 dark:text-forest-100">
                    Recursos para Acessibilidade Cognitiva
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Linguagem clara</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Utilizamos textos simples e diretos, evitando jargões técnicos 
                          ou religiosos sem a devida explicação.
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Estrutura organizada</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          O site possui uma estrutura lógica e consistente, facilitando 
                          a navegação e compreensão do conteúdo.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="rounded-xl bg-forest-50 p-6 dark:bg-forest-800/50">
                <h2 className="mb-4 font-playfair text-2xl font-medium text-forest-800 dark:text-forest-100">
                  Como usar os recursos de acessibilidade
                </h2>
                <p className="mb-6 text-forest-700 dark:text-forest-200">
                  No canto inferior direito da tela, você encontrará um botão de acessibilidade (ícone de olho) 
                  que abre um menu com as seguintes opções:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-md bg-white p-4 shadow-sm dark:bg-forest-800">
                    <Moon className="mt-1 h-5 w-5 text-forest-600 dark:text-forest-300" />
                    <div>
                      <h3 className="font-medium text-forest-800 dark:text-forest-100">Tema claro/escuro</h3>
                      <p className="text-sm text-forest-600 dark:text-forest-300">
                        Alterne entre o tema claro e escuro conforme sua preferência visual.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-md bg-white p-4 shadow-sm dark:bg-forest-800">
                    <ZoomIn className="mt-1 h-5 w-5 text-forest-600 dark:text-forest-300" />
                    <div>
                      <h3 className="font-medium text-forest-800 dark:text-forest-100">Tamanho do texto</h3>
                      <p className="text-sm text-forest-600 dark:text-forest-300">
                        Aumente ou diminua o tamanho do texto do site para facilitar a leitura.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-md bg-white p-4 shadow-sm dark:bg-forest-800">
                    <Eye className="mt-1 h-5 w-5 text-forest-600 dark:text-forest-300" />
                    <div>
                      <h3 className="font-medium text-forest-800 dark:text-forest-100">Alto contraste</h3>
                      <p className="text-sm text-forest-600 dark:text-forest-300">
                        Ative o modo de alto contraste para melhorar a visualização dos elementos da página.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-md bg-spirit-50 p-4 dark:bg-spirit-900/20">
                  <h3 className="mb-2 font-medium text-forest-800 dark:text-forest-100">Precisa de mais ajuda?</h3>
                  <p className="text-sm text-forest-600 dark:text-forest-300">
                    Se você encontrar qualquer dificuldade ao navegar pelo site ou tiver sugestões 
                    para melhorar nossa acessibilidade, por favor entre em contato através da 
                    nossa <a href="/contato" className="text-spirit-600 underline hover:text-spirit-800 dark:text-spirit-400 dark:hover:text-spirit-300">página de contato</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
};

export default Acessibilidade;
