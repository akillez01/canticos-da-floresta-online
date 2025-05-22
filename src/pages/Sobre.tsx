
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';
import AccessibilityMenu from '@/components/AccessibilityMenu';

const Sobre = () => {
  // Dados de exemplo para a equipe
  const equipe = [
    {
      nome: "Antônio Silva",
      funcao: "Diretor do Projeto",
      bio: "Musicólogo e pesquisador da cultura ayahuasqueira há mais de 20 anos. Fundou o Projeto Cânticos da Floresta em 2020.",
      foto: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    },
    {
      nome: "Mariana Santos",
      funcao: "Diretora de Audiovisual",
      bio: "Documentarista especializada em registros de manifestações culturais brasileiras, com foco em tradições religiosas.",
      foto: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    },
    {
      nome: "Carlos Eduardo",
      funcao: "Coordenador de Acessibilidade",
      bio: "Especialista em audiodescrição e recursos de acessibilidade para conteúdo audiovisual e educativo.",
      foto: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    },
    {
      nome: "Dona Francisca",
      funcao: "Consultora Cultural",
      bio: "Mestre da tradição do Santo Daime há mais de 50 anos, guardiã de conhecimentos ancestrais e hinos tradicionais.",
      foto: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section className="bg-forest-800 px-4 py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-gold-500/20 px-4 py-1 text-sm font-medium text-gold-300">
                    Sobre o projeto
                  </span>
                  <h1 className="font-playfair text-4xl font-bold leading-tight md:text-5xl">
                    Preservando os Cânticos da Floresta
                  </h1>
                  <p className="mt-6 text-lg text-forest-100">
                    Somos um projeto cultural dedicado ao registro, preservação e divulgação dos cânticos 
                    e tradições musicais da religião brasileira Santo Daime, com foco em acessibilidade 
                    e inclusão social.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                    alt="Luz na floresta simbolizando a espiritualidade" 
                    className="h-auto w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-shadow italic text-white">
                      "A música é a linguagem universal que conecta os mundos visível e invisível."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* História e Missão */}
        <section className="bg-white px-4 py-16 dark:bg-forest-900/40">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <Tabs defaultValue="historia" className="space-y-8">
                <TabsList className="mx-auto w-full max-w-md grid-cols-3">
                  <TabsTrigger value="historia">História</TabsTrigger>
                  <TabsTrigger value="missao">Missão e Valores</TabsTrigger>
                  <TabsTrigger value="impacto">Impacto Social</TabsTrigger>
                </TabsList>

                <TabsContent value="historia" className="space-y-6">
                  <div>
                    <h2 className="font-playfair text-3xl font-semibold text-forest-800 dark:text-forest-100">
                      Nossa História
                    </h2>
                    <div className="mt-6 space-y-4 text-forest-700 dark:text-forest-300">
                      <p>
                        O Projeto Cânticos da Floresta nasceu em 2020, em meio à pandemia, quando percebemos 
                        que muitos dos mestres e guardiões da tradição musical do Santo Daime estavam envelhecendo, 
                        e seus conhecimentos corriam o risco de se perder com o tempo.
                      </p>
                      <p>
                        Iniciamos como um pequeno grupo de documentaristas e musicólogos interessados em preservar 
                        esse patrimônio cultural imaterial brasileiro. No começo, fazíamos gravações simples em 
                        aparelhos celulares durante os encontros religiosos.
                      </p>
                      <p>
                        Com o tempo, o projeto cresceu, profissionalizou-se e passou a incluir especialistas em 
                        audiodescrição, legendagem e produção audiovisual de qualidade. Hoje, mantemos um acervo 
                        digital acessível com centenas de registros de hinos, entrevistas com mestres da tradição 
                        e documentação de práticas musicais.
                      </p>
                      <p>
                        Em 2022, o projeto ganhou reconhecimento ao receber o Prêmio de Preservação do Patrimônio Imaterial, 
                        possibilitando a expansão para incluir rodas de conversa, oficinas de instrumentos tradicionais 
                        e programas educativos em escolas, universidades e centros culturais.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 rounded-lg bg-forest-50 p-6 dark:bg-forest-800/40">
                    <h3 className="mb-4 font-playfair text-xl font-medium text-forest-800 dark:text-forest-100">
                      Marcos Importantes
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Ano</TableHead>
                          <TableHead>Marco</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">2020</TableCell>
                          <TableCell>Fundação do Projeto Cânticos da Floresta</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2021</TableCell>
                          <TableCell>Primeira série de documentários sobre os hinos fundacionais</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2022</TableCell>
                          <TableCell>Prêmio de Preservação do Patrimônio Imaterial</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2023</TableCell>
                          <TableCell>Início do programa de oficinas em escolas e universidades</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2024</TableCell>
                          <TableCell>Lançamento da plataforma digital acessível</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2025</TableCell>
                          <TableCell>Expansão para documentação de tradições em comunidades remotas (planejado)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="missao" className="space-y-8">
                  <div>
                    <h2 className="font-playfair text-3xl font-semibold text-forest-800 dark:text-forest-100">
                      Nossa Missão
                    </h2>
                    <p className="mt-4 text-lg font-medium text-forest-700 dark:text-forest-300">
                      Registrar, preservar e divulgar a tradição musical do Santo Daime, promovendo acessibilidade 
                      e inclusão social através do patrimônio cultural imaterial brasileiro.
                    </p>
                    <div className="mt-6 space-y-4 text-forest-700 dark:text-forest-300">
                      <p>
                        Acreditamos que as tradições musicais e espirituais brasileiras são um tesouro cultural 
                        que merece ser preservado e disponibilizado para as gerações atuais e futuras. Trabalhamos 
                        para que esse conhecimento seja acessível a todas as pessoas, independentemente de suas 
                        condições físicas, sociais ou econômicas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-3">
                    <Card className="overflow-hidden dark:border-forest-700/40">
                      <div className="h-2 bg-spirit-500"></div>
                      <CardContent className="p-6">
                        <h3 className="mb-4 text-xl font-medium text-forest-800 dark:text-forest-200">Valores</h3>
                        <ul className="space-y-3 text-forest-700 dark:text-forest-300">
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-spirit-500"></span>
                            <span>Respeito às tradições e à diversidade cultural</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-spirit-500"></span>
                            <span>Inclusão e acessibilidade para todos</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-spirit-500"></span>
                            <span>Preservação do patrimônio cultural imaterial</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-spirit-500"></span>
                            <span>Diálogo intercultural e inter-religioso</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-spirit-500"></span>
                            <span>Transparência e ética em todas as ações</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="overflow-hidden dark:border-forest-700/40">
                      <div className="h-2 bg-gold-500"></div>
                      <CardContent className="p-6">
                        <h3 className="mb-4 text-xl font-medium text-forest-800 dark:text-forest-200">Objetivos</h3>
                        <ul className="space-y-3 text-forest-700 dark:text-forest-300">
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                            <span>Criar um acervo audiovisual completo e acessível</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                            <span>Documentar conhecimentos dos mestres e guardiões</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                            <span>Promover a diversidade religiosa e cultural</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                            <span>Fomentar pesquisas acadêmicas sobre o tema</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                            <span>Promover ações educativas de contrapartida social</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="overflow-hidden dark:border-forest-700/40">
                      <div className="h-2 bg-forest-600"></div>
                      <CardContent className="p-6">
                        <h3 className="mb-4 text-xl font-medium text-forest-800 dark:text-forest-200">Como Atuamos</h3>
                        <ul className="space-y-3 text-forest-700 dark:text-forest-300">
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-forest-600"></span>
                            <span>Registros audiovisuais de alta qualidade</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-forest-600"></span>
                            <span>Entrevistas e documentários com mestres</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-forest-600"></span>
                            <span>Produção de material educativo acessível</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-forest-600"></span>
                            <span>Rodas de conversa e eventos culturais</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-forest-600"></span>
                            <span>Oficinas de instrumentos e cânticos tradicionais</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="impacto" className="space-y-8">
                  <div>
                    <h2 className="font-playfair text-3xl font-semibold text-forest-800 dark:text-forest-100">
                      Nosso Impacto
                    </h2>
                    <div className="mt-6 space-y-4 text-forest-700 dark:text-forest-300">
                      <p>
                        O Projeto Cânticos da Floresta tem trabalhado para gerar impacto positivo em diversas 
                        frentes, combinando preservação cultural com inclusão social e educativa.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex flex-col rounded-lg border p-6 dark:border-forest-700/40">
                      <h3 className="text-xl font-medium text-forest-800 dark:text-forest-100">Preservação Cultural</h3>
                      <div className="mt-3 flex-grow text-forest-700 dark:text-forest-300">
                        <ul className="ml-5 list-disc space-y-1">
                          <li>Mais de 300 hinos documentados com qualidade profissional</li>
                          <li>50+ entrevistas com mestres e guardiões tradicionais</li>
                          <li>Acervo digital preservando conhecimentos em risco de desaparecer</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col rounded-lg border p-6 dark:border-forest-700/40">
                      <h3 className="text-xl font-medium text-forest-800 dark:text-forest-100">Inclusão e Acessibilidade</h3>
                      <div className="mt-3 flex-grow text-forest-700 dark:text-forest-300">
                        <ul className="ml-5 list-disc space-y-1">
                          <li>100% do acervo com legendas em português</li>
                          <li>75% do acervo com audiodescrição</li>
                          <li>Plataforma digital com recursos de acessibilidade</li>
                          <li>Oficinas inclusivas para pessoas com deficiência</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col rounded-lg border p-6 dark:border-forest-700/40">
                      <h3 className="text-xl font-medium text-forest-800 dark:text-forest-100">Educação e Difusão</h3>
                      <div className="mt-3 flex-grow text-forest-700 dark:text-forest-300">
                        <ul className="ml-5 list-disc space-y-1">
                          <li>30 escolas atendidas com atividades educativas</li>
                          <li>12 universidades parceiras em pesquisas</li>
                          <li>5 exposições itinerantes realizadas</li>
                          <li>Mais de 20.000 visitantes em eventos presenciais</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col rounded-lg border p-6 dark:border-forest-700/40">
                      <h3 className="text-xl font-medium text-forest-800 dark:text-forest-100">Comunidades Atendidas</h3>
                      <div className="mt-3 flex-grow text-forest-700 dark:text-forest-300">
                        <ul className="ml-5 list-disc space-y-1">
                          <li>15 centros religiosos documentados</li>
                          <li>3 comunidades indígenas parceiras</li>
                          <li>Atendimento a 5 estados brasileiros</li>
                          <li>Impacto direto em mais de 1.000 pessoas</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col rounded-lg border p-6 dark:border-forest-700/40">
                      <h3 className="text-xl font-medium text-forest-800 dark:text-forest-100">Reconhecimentos</h3>
                      <div className="mt-3 flex-grow text-forest-700 dark:text-forest-300">
                        <ul className="ml-5 list-disc space-y-1">
                          <li>Prêmio de Preservação do Patrimônio Imaterial (2022)</li>
                          <li>Menção honrosa em Acessibilidade Cultural (2023)</li>
                          <li>Selecionado para programas de fomento à cultura</li>
                          <li>Citado em 8 artigos acadêmicos</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col rounded-lg border p-6 dark:border-forest-700/40">
                      <h3 className="text-xl font-medium text-forest-800 dark:text-forest-100">Metas Futuras</h3>
                      <div className="mt-3 flex-grow text-forest-700 dark:text-forest-300">
                        <ul className="ml-5 list-disc space-y-1">
                          <li>Ampliar cobertura para todos os estados do Brasil</li>
                          <li>Produzir documentário longa-metragem</li>
                          <li>Criar aplicativo móvel com recursos de acessibilidade</li>
                          <li>Publicar livro bilíngue sobre os cânticos</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg bg-gradient-to-r from-gold-500/20 to-spirit-500/20 p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-medium text-forest-800 dark:text-forest-100">Apoie Nossa Missão</h3>
                      <p className="mt-2 text-forest-700 dark:text-forest-300">
                        Ajude-nos a expandir o impacto do projeto e preservar ainda mais deste rico patrimônio cultural.
                      </p>
                      <div className="mt-4">
                        <Link to="/colabore">
                          <Button className="bg-forest-700 hover:bg-forest-800">Saiba como colaborar</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="bg-forest-50 px-4 py-16 dark:bg-forest-900/60">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-playfair text-3xl font-semibold text-forest-800 dark:text-forest-100">
                Nossa Equipe
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-forest-600 dark:text-forest-300">
                Conheça as pessoas dedicadas que fazem o Projeto Cânticos da Floresta acontecer, 
                unindo conhecimento técnico, amor à cultura brasileira e compromisso com a acessibilidade.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {equipe.map((pessoa, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-forest-800/50">
                  <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                    <img 
                      src={pessoa.foto} 
                      alt={`Foto de ${pessoa.nome}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-forest-800 dark:text-forest-100">{pessoa.nome}</h3>
                    <p className="text-sm font-medium text-spirit-600 dark:text-spirit-400">{pessoa.funcao}</p>
                    <p className="mt-3 text-sm text-forest-600 dark:text-forest-300">
                      {pessoa.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-forest-600 dark:text-forest-300">
                Além da equipe principal, contamos com uma rede de colaboradores, voluntários e parceiros 
                que são essenciais para o sucesso do projeto.
              </p>
              <div className="mt-6">
                <Link to="/colabore">
                  <Button variant="outline">
                    Junte-se à nossa equipe
                  </Button>
                </Link>
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

export default Sobre;
