import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import image1 from '/image/image1.png';

const Mission = () => {
  return (
    <section id="sobre" className="overflow-hidden bg-forest-800 px-4 py-16 text-white md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8">
            {/* Imagem com elementos decorativos - ÁREA COM CORREÇÃO */}
            <div className="relative order-2 flex items-center justify-center md:order-1">
              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl" style={{ height: '100%' }}>
                {/* Imagem principal - CORRIGIDA */}
                <img 
                  src={image1}  // Removido o 'url()' incorreto
                  alt="Luz entre árvores representando a espiritualidade da floresta" 
                  className="h-full w-full object-cover rounded-2xl"
                  style={{ minHeight: '400px' }}  // Garante altura mínima
                />
                
                {/* Elementos decorativos (mantidos exatamente iguais) */}
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border-4 border-spirit-500/30 bg-spirit-500/20 backdrop-blur-sm"></div>
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border-4 border-gold-500/30 bg-gold-500/20 backdrop-blur-sm"></div>
                
                {/* Padrão gráfico sobreposto (mantido igual) */}
                <div className="absolute inset-0 mix-blend-soft-light opacity-30 forest-pattern"></div>
              </div>
            </div>
            
            {/* Conteúdo textual (MANTIDO EXATAMENTE IGUAL) */}
            <div className="order-1 md:order-2">
              <span className="mb-2 inline-block rounded-full bg-gold-500/20 px-4 py-1 text-sm font-medium text-gold-300">
                Nossa Missão
              </span>
              
              <h2 className="font-playfair text-3xl font-semibold leading-tight text-white md:text-4xl">
                Preservando a tradição através da música e da partilha
              </h2>
              
              <div className="mt-6 space-y-4 text-forest-100">
                <p>
                  O <em>Projeto Cânticos da Floresta</em> nasceu da necessidade de registrar, preservar e compartilhar a rica tradição musical do Santo Daime, religião brasileira com profundas raízes amazônicas.
                </p>
                <p>
                  Nossa missão é criar um acervo audiovisual acessível que preserve estes conhecimentos ancestrais, promovendo o diálogo intercultural e a valorização das tradições espirituais brasileiras.
                </p>
                <p>
                  Através dos encontros musicais, documentários e rodas de conversa, buscamos fomentar o respeito à diversidade religiosa e fortalecer os laços comunitários em torno deste patrimônio imaterial.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/sobre">
                  <Button variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20">
                    Conheça nossa história
                  </Button>
                </Link>
                <Link to="/colabore">
                  <Button className="bg-gold-500 text-forest-900 hover:bg-gold-600">
                    Colabore com o projeto
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;