
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, HandHeart, Users, Send, Gift } from 'lucide-react';
import AccessibilityMenu from '@/components/AccessibilityMenu';

const Colabore = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Cabeçalho */}
        <section className="bg-forest-50 px-4 py-16 dark:bg-forest-900/80 md:py-20">
          <div className="container">
            <h1 className="text-center font-playfair text-4xl font-semibold text-forest-800 dark:text-forest-100 md:text-5xl">
              Colabore com o Projeto
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-forest-600 dark:text-forest-300">
              O Projeto Cânticos da Floresta só é possível graças ao apoio de pessoas como você.
              Existem diversas formas de contribuir para a preservação e divulgação desta rica tradição musical e cultural.
            </p>
          </div>
        </section>

        {/* Opções de colaboração */}
        <section className="bg-white px-4 py-16 dark:bg-forest-900/40">
          <div className="container">
            <Tabs defaultValue="doacao" className="mx-auto max-w-4xl">
              <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="doacao">
                  <Heart className="mr-2 h-4 w-4" /> Doação
                </TabsTrigger>
                <TabsTrigger value="voluntario">
                  <HandHeart className="mr-2 h-4 w-4" /> Voluntariado
                </TabsTrigger>
                <TabsTrigger value="parceria">
                  <Users className="mr-2 h-4 w-4" /> Parcerias
                </TabsTrigger>
                <TabsTrigger value="sugestoes">
                  <Send className="mr-2 h-4 w-4" /> Sugestões
                </TabsTrigger>
              </TabsList>

              {/* Conteúdo Doação */}
              <TabsContent value="doacao" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center font-playfair text-2xl">Apoie o Projeto com Uma Doação</CardTitle>
                    <CardDescription className="text-center">
                      Sua contribuição ajuda a manter o projeto vivo e acessível a todos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <p className="mb-4 text-forest-700 dark:text-forest-300">
                          Os recursos arrecadados são utilizados para:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-forest-600 dark:text-forest-400">
                          <li>Equipamentos audiovisuais para registro dos encontros</li>
                          <li>Produção de legendas e recursos de acessibilidade</li>
                          <li>Manutenção da plataforma digital</li>
                          <li>Deslocamento para gravações em comunidades remotas</li>
                          <li>Realização de eventos culturais e educativos de contrapartida social</li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="flex flex-col items-center rounded-lg border p-4 text-center dark:border-forest-700">
                          <h4 className="mb-2 font-medium">Doação Mensal</h4>
                          <p className="mb-4 text-sm text-forest-600 dark:text-forest-400">Contribuição recorrente para apoiar o projeto continuamente</p>
                          <Button className="mt-auto bg-forest-600 hover:bg-forest-700">Doar Mensalmente</Button>
                        </div>
                        <div className="flex flex-col items-center rounded-lg border p-4 text-center dark:border-forest-700">
                          <h4 className="mb-2 font-medium">Doação Única</h4>
                          <p className="mb-4 text-sm text-forest-600 dark:text-forest-400">Contribuição pontual para ajudar no que for mais necessário</p>
                          <Button className="mt-auto bg-forest-600 hover:bg-forest-700">Fazer Doação</Button>
                        </div>
                        <div className="flex flex-col items-center rounded-lg border p-4 text-center dark:border-forest-700">
                          <h4 className="mb-2 font-medium">Doação Direcionada</h4>
                          <p className="mb-4 text-sm text-forest-600 dark:text-forest-400">Escolha um projeto específico para destinar sua contribuição</p>
                          <Button className="mt-auto bg-forest-600 hover:bg-forest-700">Escolher Projeto</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <p className="mt-4 text-center text-sm text-forest-500 dark:text-forest-400">
                      Todas as doações recebem prestação de contas e relatório de impacto.
                      <br />Para dúvidas sobre doações, entre em contato pelo email: <span className="font-medium">doacoes@canticosdafloresta.org</span>
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Conteúdo Voluntariado */}
              <TabsContent value="voluntario" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center font-playfair text-2xl">Seja Voluntário</CardTitle>
                    <CardDescription className="text-center">
                      Contribua com seu tempo e habilidades para o crescimento do projeto.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="mb-4 text-forest-700 dark:text-forest-300">
                        Buscamos voluntários nas seguintes áreas:
                      </p>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4 dark:border-forest-700">
                          <h4 className="mb-2 font-medium">Audiovisual e Edição</h4>
                          <ul className="ml-6 list-disc space-y-1 text-sm text-forest-600 dark:text-forest-400">
                            <li>Fotografia e filmagem dos encontros</li>
                            <li>Edição de vídeo e áudio</li>
                            <li>Criação de legendas e audiodescrição</li>
                          </ul>
                        </div>
                        <div className="rounded-lg border p-4 dark:border-forest-700">
                          <h4 className="mb-2 font-medium">Tecnologia e Web</h4>
                          <ul className="ml-6 list-disc space-y-1 text-sm text-forest-600 dark:text-forest-400">
                            <li>Desenvolvimento e manutenção do site</li>
                            <li>Suporte em acessibilidade digital</li>
                            <li>Organização do banco de dados de mídia</li>
                          </ul>
                        </div>
                        <div className="rounded-lg border p-4 dark:border-forest-700">
                          <h4 className="mb-2 font-medium">Pesquisa e Documentação</h4>
                          <ul className="ml-6 list-disc space-y-1 text-sm text-forest-600 dark:text-forest-400">
                            <li>Pesquisa histórica sobre os hinos</li>
                            <li>Transcrição musical e letras</li>
                            <li>Documentação de conhecimentos tradicionais</li>
                          </ul>
                        </div>
                        <div className="rounded-lg border p-4 dark:border-forest-700">
                          <h4 className="mb-2 font-medium">Eventos e Divulgação</h4>
                          <ul className="ml-6 list-disc space-y-1 text-sm text-forest-600 dark:text-forest-400">
                            <li>Organização de eventos presenciais</li>
                            <li>Comunicação e redes sociais</li>
                            <li>Captação de recursos e parcerias</li>
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-lg bg-forest-50 p-5 dark:bg-forest-800/50">
                        <h4 className="mb-3 font-medium">Formulário de Interesse para Voluntariado</h4>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="nome">Nome Completo</Label>
                              <Input id="nome" placeholder="Seu nome" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="area">Área de Interesse</Label>
                            <select id="area" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="">Selecione uma área</option>
                              <option value="audiovisual">Audiovisual e Edição</option>
                              <option value="tecnologia">Tecnologia e Web</option>
                              <option value="pesquisa">Pesquisa e Documentação</option>
                              <option value="eventos">Eventos e Divulgação</option>
                              <option value="outros">Outros</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="mensagem">Conte-nos sobre você e como gostaria de contribuir</Label>
                            <textarea 
                              id="mensagem" 
                              placeholder="Compartilhe suas habilidades e disponibilidade..."
                              className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            ></textarea>
                          </div>
                          <Button className="w-full bg-forest-600 hover:bg-forest-700">
                            <Send className="mr-2 h-4 w-4" /> Enviar Interesse
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Conteúdo Parcerias */}
              <TabsContent value="parceria" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center font-playfair text-2xl">Parcerias Institucionais</CardTitle>
                    <CardDescription className="text-center">
                      Fortalecendo redes de colaboração para a valorização da cultura tradicional.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-forest-700 dark:text-forest-300">
                        Buscamos estabelecer parcerias com:
                      </p>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="rounded-lg border p-5 dark:border-forest-700">
                          <h4 className="mb-3 font-medium">Instituições Culturais</h4>
                          <p className="mb-3 text-sm text-forest-600 dark:text-forest-400">
                            Museus, centros culturais, pontos de cultura e espaços que possam receber exibições, 
                            rodas de conversa e encontros presenciais.
                          </p>
                          <Button variant="outline" className="w-full">Entre em Contato</Button>
                        </div>
                        
                        <div className="rounded-lg border p-5 dark:border-forest-700">
                          <h4 className="mb-3 font-medium">Instituições de Ensino</h4>
                          <p className="mb-3 text-sm text-forest-600 dark:text-forest-400">
                            Universidades, escolas e grupos de pesquisa interessados em estudos sobre religiões 
                            brasileiras, música tradicional e patrimônio imaterial.
                          </p>
                          <Button variant="outline" className="w-full">Entre em Contato</Button>
                        </div>
                        
                        <div className="rounded-lg border p-5 dark:border-forest-700">
                          <h4 className="mb-3 font-medium">Centros Religiosos</h4>
                          <p className="mb-3 text-sm text-forest-600 dark:text-forest-400">
                            Igrejas do Santo Daime e outros centros ayahuasqueiros que desejam documentar e preservar 
                            sua tradição musical e cultural.
                          </p>
                          <Button variant="outline" className="w-full">Entre em Contato</Button>
                        </div>
                        
                        <div className="rounded-lg border p-5 dark:border-forest-700">
                          <h4 className="mb-3 font-medium">Empresas e Patrocinadores</h4>
                          <p className="mb-3 text-sm text-forest-600 dark:text-forest-400">
                            Organizações que queiram apoiar financeiramente o projeto através de patrocínio direto 
                            ou leis de incentivo à cultura.
                          </p>
                          <Button variant="outline" className="w-full">Entre em Contato</Button>
                        </div>
                      </div>

                      <div className="rounded-lg bg-forest-700 p-6 text-white">
                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                          <div>
                            <h4 className="text-xl font-medium">Torne-se um Parceiro</h4>
                            <p className="mt-2 text-forest-100">
                              Entre em contato para discutirmos possibilidades de cooperação e benefícios mútuos.
                            </p>
                          </div>
                          <Button className="bg-white text-forest-800 hover:bg-forest-100">
                            Propor Parceria
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Conteúdo Sugestões */}
              <TabsContent value="sugestoes" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center font-playfair text-2xl">Envie Sugestões</CardTitle>
                    <CardDescription className="text-center">
                      Compartilhe ideias para aprimorar o projeto e sugerir novos conteúdos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-forest-700 dark:text-forest-300">
                        Queremos ouvir suas sugestões sobre:
                      </p>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <div className="flex flex-col items-center p-3 text-center">
                          <div className="mb-3 rounded-full bg-forest-100 p-3 dark:bg-forest-800">
                            <Gift className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                          </div>
                          <h4 className="text-sm font-medium">Novas Gravações</h4>
                          <p className="mt-1 text-xs text-forest-500 dark:text-forest-400">
                            Sugerir hinos ou músicas para documentação
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-center p-3 text-center">
                          <div className="mb-3 rounded-full bg-forest-100 p-3 dark:bg-forest-800">
                            <Users className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                          </div>
                          <h4 className="text-sm font-medium">Entrevistas</h4>
                          <p className="mt-1 text-xs text-forest-500 dark:text-forest-400">
                            Indicar pessoas para entrevistas e documentários
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-center p-3 text-center">
                          <div className="mb-3 rounded-full bg-forest-100 p-3 dark:bg-forest-800">
                            <Send className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                          </div>
                          <h4 className="text-sm font-medium">Eventos</h4>
                          <p className="mt-1 text-xs text-forest-500 dark:text-forest-400">
                            Propostas de eventos e encontros comunitários
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-center p-3 text-center">
                          <div className="mb-3 rounded-full bg-forest-100 p-3 dark:bg-forest-800">
                            <Heart className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                          </div>
                          <h4 className="text-sm font-medium">Melhorias</h4>
                          <p className="mt-1 text-xs text-forest-500 dark:text-forest-400">
                            Sugestões para aprimorar o projeto e o site
                          </p>
                        </div>
                      </div>

                      <div className="rounded-lg bg-forest-50 p-5 dark:bg-forest-800/50">
                        <h4 className="mb-4 font-medium">Envie sua sugestão</h4>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="nome-sugestao">Nome</Label>
                              <Input id="nome-sugestao" placeholder="Seu nome" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email-sugestao">Email</Label>
                              <Input id="email-sugestao" type="email" placeholder="seu.email@exemplo.com" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="tipo-sugestao">Tipo de Sugestão</Label>
                            <select id="tipo-sugestao" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="">Selecione o tipo de sugestão</option>
                              <option value="gravacao">Nova Gravação</option>
                              <option value="entrevista">Entrevista</option>
                              <option value="evento">Evento</option>
                              <option value="melhoria">Melhoria do Site/Projeto</option>
                              <option value="outro">Outro</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sugestao">Sua Sugestão</Label>
                            <textarea 
                              id="sugestao" 
                              placeholder="Descreva sua sugestão em detalhes..."
                              className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            ></textarea>
                          </div>
                          <Button className="w-full bg-forest-600 hover:bg-forest-700">
                            Enviar Sugestão
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
};

export default Colabore;
