
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AccessibilityMenu from '@/components/AccessibilityMenu';

// Dados de exemplo para eventos
const eventos = [
  {
    id: '1',
    titulo: 'Encontro Musical: Hinos da Rainha da Floresta',
    data: '20 de Junho, 2025',
    hora: '19:00 - 22:00',
    local: 'Centro Cultural Santo Daime, Rio de Janeiro',
    descricao: 'Encontro para gravação de hinos tradicionais do hinário da Rainha da Floresta, com participação especial de músicos veteranos da tradição.',
    capacidade: 'Limitado a 30 participantes',
    tipo: 'presencial',
    link: '#',
  },
  {
    id: '2',
    titulo: 'Roda de Conversa: A Importância da Preservação dos Cânticos Ancestrais',
    data: '15 de Julho, 2025',
    hora: '20:00 - 21:30',
    local: 'Online (Zoom)',
    descricao: 'Debate entre pesquisadores e mestres da cultura ayahuasqueira sobre a importância da preservação e documentação dos cânticos e sua significância cultural.',
    capacidade: 'Vagas ilimitadas',
    tipo: 'online',
    link: '#',
  },
  {
    id: '3',
    titulo: 'Workshop: Instrumentos Tradicionais do Santo Daime',
    data: '5 de Agosto, 2025',
    hora: '14:00 - 18:00',
    local: 'Casa de Cultura Amazônica, Manaus',
    descricao: 'Aprenda sobre a história, fabricação e manuseio dos instrumentos tradicionais utilizados nos rituais: maracá, violão, flauta e tambores.',
    capacidade: '20 participantes',
    tipo: 'presencial',
    link: '#',
  },
  {
    id: '4',
    titulo: 'Exibição do Documentário "Vozes da Floresta"',
    data: '23 de Agosto, 2025',
    hora: '19:30 - 21:30',
    local: 'Centro Cultural Banco do Brasil, São Paulo',
    descricao: 'Primeira exibição do documentário "Vozes da Floresta", seguida de debate com o diretor e participantes do projeto. O filme aborda a tradição musical do Santo Daime.',
    capacidade: '100 espectadores',
    tipo: 'presencial',
    link: '#',
  },
  {
    id: '5',
    titulo: 'Curso Online: Introdução aos Hinos do Santo Daime',
    data: '10 a 25 de Setembro, 2025',
    hora: 'Acesso livre por 15 dias',
    local: 'Plataforma de ensino online',
    descricao: 'Curso introdutório sobre os principais hinos da tradição, suas histórias, significados e contexto cultural. Inclui material didático e certificado.',
    capacidade: 'Vagas ilimitadas',
    tipo: 'online',
    link: '#',
  }
];

const Agenda = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Cabeçalho da página */}
        <section className="bg-forest-50 px-4 py-16 dark:bg-forest-900/80 md:py-20">
          <div className="container">
            <h1 className="text-center font-playfair text-4xl font-semibold text-forest-800 dark:text-forest-100 md:text-5xl">
              Agenda de Eventos
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-forest-600 dark:text-forest-300">
              Conheça nossos próximos eventos, encontros musicais, exibições, rodas de conversa e workshops.
              Participe e aprofunde seus conhecimentos sobre a tradição musical do Santo Daime.
            </p>
          </div>
        </section>

        {/* Lista de eventos */}
        <section className="bg-white px-4 py-16 dark:bg-forest-900/50">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {eventos.map((evento) => (
                <Card key={evento.id} className="overflow-hidden transition-all hover:shadow-lg dark:border-forest-700/50 dark:bg-forest-800/50">
                  <CardHeader className={`pb-4 ${evento.tipo === 'online' ? 'bg-spirit-100/30 dark:bg-spirit-900/20' : 'bg-gold-100/30 dark:bg-gold-900/20'}`}>
                    <div className="mb-2 flex items-center">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        evento.tipo === 'online' 
                          ? 'bg-spirit-200 text-spirit-800 dark:bg-spirit-800 dark:text-spirit-200' 
                          : 'bg-gold-200 text-gold-800 dark:bg-gold-800 dark:text-gold-200'
                      }`}>
                        {evento.tipo === 'online' ? 'Online' : 'Presencial'}
                      </span>
                    </div>
                    <CardTitle className="font-playfair text-xl text-forest-800 dark:text-forest-100">
                      {evento.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-4">
                    <CardDescription className="mb-4 text-forest-600 dark:text-forest-300">
                      {evento.descricao}
                    </CardDescription>

                    <div className="mt-4 space-y-3 text-sm">
                      <div className="flex items-start">
                        <Calendar className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-forest-500 dark:text-forest-400" />
                        <span className="text-forest-700 dark:text-forest-300">{evento.data}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-forest-500 dark:text-forest-400" />
                        <span className="text-forest-700 dark:text-forest-300">{evento.hora}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-forest-500 dark:text-forest-400" />
                        <span className="text-forest-700 dark:text-forest-300">{evento.local}</span>
                      </div>
                      <div className="flex items-start">
                        <Users className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-forest-500 dark:text-forest-400" />
                        <span className="text-forest-700 dark:text-forest-300">{evento.capacidade}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      href={evento.link} 
                      className="w-full bg-forest-600 hover:bg-forest-700 dark:bg-forest-700 dark:hover:bg-forest-600"
                      onClick={() => window.open(evento.link, '_blank')}
                    >
                      {evento.tipo === 'online' ? 'Inscrever-se' : 'Reservar Vaga'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Banner para sugestão de eventos */}
            <div className="mt-16 rounded-lg bg-gradient-to-r from-forest-700 to-forest-800 p-6 shadow-lg dark:from-forest-800 dark:to-forest-900">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-white">Quer sugerir um evento?</h3>
                  <p className="mt-2 text-forest-100">
                    Entre em contato conosco para sugerir novos eventos, colaborações ou participar do projeto.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  onClick={() => window.location.href = "/contato"}
                >
                  Entrar em contato
                </Button>
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

export default Agenda;
