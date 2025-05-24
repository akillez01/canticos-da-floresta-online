
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-forest-900/90 to-forest-800/90">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10 forest-pattern" aria-hidden="true"></div>
      
      {/* Content */}
      <div className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-24 text-center text-white md:py-32">
        {/* Subtle leaf animation */}
        <div className="absolute left-[10%] top-[20%] h-16 w-16 rotate-12 opacity-20 animate-leaf-sway" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,3c0,0-45,40-45,67s20,30,45,30s45-3,45-30S50,3,50,3z"/>
          </svg>
        </div>
        <div className="absolute right-[15%] top-[30%] h-12 w-12 -rotate-12 opacity-30 animate-leaf-sway [animation-delay:1s]" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,3c0,0-45,40-45,67s20,30,45,30s45-3,45-30S50,3,50,3z"/>
          </svg>
        </div>
        
        <h1 className="animate-fade-in font-playfair text-4xl font-bold leading-tight text-shadow md:text-5xl lg:text-6xl">
          Cânticos da Floresta
        </h1>
        
        <p className="animate-fade-in mt-6 max-w-2xl text-lg leading-relaxed text-white/90 [animation-delay:200ms] md:text-xl">
          Preservando e celebrando a música sagrada do Santo Daime através de encontros que transcendem fronteiras culturais e espirituais.
        </p>
        
        <div className="animate-fade-in mt-10 flex flex-wrap justify-center gap-4 [animation-delay:400ms]">
          <Button 
            size="lg" 
            className="bg-gold-500 text-forest-900 hover:bg-gold-600"
            onClick={() => scrollToSection('videos')}
          >
            Explorar Vídeos
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            onClick={() => scrollToSection('sobre')}
          >
            Conhecer o Projeto
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('videos')}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
          aria-label="Rolar para baixo"
        >
          <span className="mb-2 text-sm text-white/70">Descer</span>
          <ChevronDown className="h-6 w-6 animate-bounce text-white/70" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
