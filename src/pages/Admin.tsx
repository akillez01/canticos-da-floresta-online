
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Video, 
  Calendar, 
  Users, 
  FileText, 
  Image, 
  Settings,
  MoreVertical,
  PlusCircle,
  Loader2,
  Eye
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import AccessibilityMenu from '@/components/AccessibilityMenu';

// Mock data
const videos = [
  { id: 1, title: 'Hino "O Preto Velho"', category: 'Hinos', date: '2025-04-15', status: 'Publicado' },
  { id: 2, title: 'Entrevista com Mestre Irineu', category: 'Entrevistas', date: '2025-03-22', status: 'Rascunho' },
  { id: 3, title: 'Documentário: História do Santo Daime', category: 'Documentários', date: '2025-02-10', status: 'Publicado' },
];

const events = [
  { id: 1, title: 'Encontro Musical: Hinos da Rainha da Floresta', date: '2025-06-20', location: 'Rio de Janeiro', status: 'Agendado' },
  { id: 2, title: 'Roda de Conversa: Preservação de Cânticos', date: '2025-07-15', location: 'Online', status: 'Agendado' },
];

const teamMembers = [
  { id: 1, name: 'Maria Silva', role: 'Coordenadora', email: 'maria@canticosdafloresta.org' },
  { id: 2, name: 'João Santos', role: 'Produtor Musical', email: 'joao@canticosdafloresta.org' },
];

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm();

  const handleSubmit = (data: any) => {
    setIsLoading(true);
    console.log('Form data:', data);
    
    // Simulação de envio
    setTimeout(() => {
      setIsLoading(false);
      alert('Vídeo adicionado com sucesso!');
      form.reset();
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      {/* Admin header */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <span className="font-playfair text-xl font-bold text-forest-800 dark:text-forest-100">Cânticos da Floresta</span>
            <span className="rounded-md bg-forest-100 px-2 py-1 text-xs font-medium text-forest-800 dark:bg-forest-900 dark:text-forest-100">Admin</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <Eye className="h-4 w-4" />
            <span>Ver site</span>
          </a>
          <Button variant="outline" onClick={() => alert('Logout simulado')}>Sair</Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-shrink-0 border-r bg-white dark:border-gray-800 dark:bg-gray-950 md:block">
          <nav className="flex h-full flex-col">
            <div className="flex-1 space-y-1 p-4">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#videos" className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  <span>Vídeos</span>
                </a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#events" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Eventos</span>
                </a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#content" className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span>Conteúdo do Site</span>
                </a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#gallery" className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  <span>Galeria</span>
                </a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#team" className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Equipe</span>
                </a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#settings" className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  <span>Configurações</span>
                </a>
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="mb-6 font-playfair text-2xl font-bold text-forest-900 dark:text-forest-50">
            Painel Administrativo
          </h1>

          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="videos">Vídeos</TabsTrigger>
              <TabsTrigger value="events">Eventos</TabsTrigger>
              <TabsTrigger value="content">Conteúdo</TabsTrigger>
              <TabsTrigger value="gallery">Galeria</TabsTrigger>
              <TabsTrigger value="team">Equipe</TabsTrigger>
              <TabsTrigger value="settings">Config.</TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Gerenciar Vídeos</h2>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Adicionar Vídeo
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Vídeos Recentes</CardTitle>
                  <CardDescription>
                    Gerencie os vídeos do acervo do Cânticos da Floresta.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                          <th className="p-2">Título</th>
                          <th className="p-2">Categoria</th>
                          <th className="p-2">Data</th>
                          <th className="p-2">Status</th>
                          <th className="p-2">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {videos.map(video => (
                          <tr key={video.id} className="border-b">
                            <td className="p-2">{video.title}</td>
                            <td className="p-2">{video.category}</td>
                            <td className="p-2">{video.date}</td>
                            <td className="p-2">
                              <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                                video.status === 'Publicado' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                              }`}>
                                {video.status}
                              </span>
                            </td>
                            <td className="p-2">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem>Ver</DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600 dark:text-red-400">
                                    Excluir
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Adicionar Novo Vídeo</CardTitle>
                  <CardDescription>
                    Preencha os campos para adicionar um novo vídeo ao acervo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="video-title">Título do Vídeo</Label>
                        <Input id="video-title" placeholder="Ex: Hino da Rainha da Floresta" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="video-category">Categoria</Label>
                        <Input id="video-category" placeholder="Ex: Hinos, Entrevistas, etc" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="video-url">Link do YouTube</Label>
                      <Input id="video-url" placeholder="https://youtube.com/watch?v=..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="video-description">Descrição</Label>
                      <Textarea id="video-description" rows={4} placeholder="Descreva o vídeo..." />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="has-caption" />
                        <Label htmlFor="has-caption">Vídeo possui legenda</Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="has-audio-description" />
                        <Label htmlFor="has-audio-description">Vídeo possui audiodescrição</Label>
                      </div>
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Adicionar Vídeo'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Gerenciar Eventos</h2>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Adicionar Evento
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Eventos Programados</CardTitle>
                  <CardDescription>
                    Gerencie os eventos e atividades do Cânticos da Floresta.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                          <th className="p-2">Título</th>
                          <th className="p-2">Data</th>
                          <th className="p-2">Local</th>
                          <th className="p-2">Status</th>
                          <th className="p-2">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map(event => (
                          <tr key={event.id} className="border-b">
                            <td className="p-2">{event.title}</td>
                            <td className="p-2">{event.date}</td>
                            <td className="p-2">{event.location}</td>
                            <td className="p-2">
                              <span className="inline-flex rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                {event.status}
                              </span>
                            </td>
                            <td className="p-2">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem>Ver</DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600 dark:text-red-400">
                                    Cancelar Evento
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Total: {events.length} eventos programados
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Conteúdo do Site</CardTitle>
                  <CardDescription>
                    Edite os textos e informações das páginas do site.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Button variant="outline" className="h-24 flex-col items-center justify-center gap-2">
                      <FileText className="h-6 w-6" />
                      <span>Página Inicial</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex-col items-center justify-center gap-2">
                      <FileText className="h-6 w-6" />
                      <span>Sobre o Projeto</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex-col items-center justify-center gap-2">
                      <FileText className="h-6 w-6" />
                      <span>Acessibilidade</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex-col items-center justify-center gap-2">
                      <FileText className="h-6 w-6" />
                      <span>Colabore</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gallery">
              <Card>
                <CardHeader>
                  <CardTitle>Galeria de Imagens</CardTitle>
                  <CardDescription>
                    Gerencie as imagens e fotos do projeto.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex justify-end">
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Upload de Imagens
                    </Button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="relative aspect-square rounded-md border bg-gray-100 dark:bg-gray-800">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          <Image className="h-6 w-6" />
                        </div>
                        <div className="absolute bottom-2 right-2">
                          <Button variant="destructive" size="icon" className="h-7 w-7">
                            <span className="sr-only">Excluir</span>
                            &times;
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team">
              <Card>
                <CardHeader>
                  <CardTitle>Gerenciar Equipe</CardTitle>
                  <CardDescription>
                    Adicione ou edite membros da equipe do projeto.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex justify-end">
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Adicionar Membro
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                          <th className="p-2">Nome</th>
                          <th className="p-2">Função</th>
                          <th className="p-2">Email</th>
                          <th className="p-2">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamMembers.map(member => (
                          <tr key={member.id} className="border-b">
                            <td className="p-2">{member.name}</td>
                            <td className="p-2">{member.role}</td>
                            <td className="p-2">{member.email}</td>
                            <td className="p-2">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600 dark:text-red-400">
                                    Remover
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações do Site</CardTitle>
                  <CardDescription>
                    Gerencie as configurações gerais do projeto.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="site-title">Título do Site</Label>
                      <Input id="site-title" defaultValue="Cânticos da Floresta" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="site-description">Descrição do Site</Label>
                      <Textarea 
                        id="site-description" 
                        rows={3}
                        defaultValue="Projeto de registro e divulgação dos cânticos do Santo Daime."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Logo do Site</Label>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-md border bg-gray-100 dark:bg-gray-800"></div>
                        <Button variant="outline">Alterar Logo</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email de Contato</Label>
                      <Input id="contact-email" type="email" defaultValue="contato@canticosdafloresta.org" />
                    </div>
                    <div className="space-y-2">
                      <Label>Redes Sociais</Label>
                      <div className="space-y-3">
                        <div className="grid gap-2">
                          <Label htmlFor="youtube">YouTube</Label>
                          <Input id="youtube" placeholder="URL do canal" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="instagram">Instagram</Label>
                          <Input id="instagram" placeholder="URL do perfil" />
                        </div>
                      </div>
                    </div>
                    <Button type="submit">Salvar Configurações</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <AccessibilityMenu />
    </div>
  );
};

export default Admin;
