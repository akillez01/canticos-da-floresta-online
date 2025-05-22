
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  Sun, 
  Moon, 
  ZoomIn, 
  ZoomOut,
  Eye,
  ArrowUp
} from "lucide-react";

const AccessibilityMenu = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detectar rolagem para mostrar botão de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Verificar se há preferências salvas
    const savedTheme = localStorage.getItem('canticos-theme');
    const savedFontSize = localStorage.getItem('canticos-fontSize');
    const savedContrast = localStorage.getItem('canticos-highContrast');

    if (savedTheme) setTheme(savedTheme as 'light' | 'dark');
    if (savedFontSize) setFontSize(savedFontSize as 'normal' | 'large');
    if (savedContrast) setHighContrast(savedContrast === 'true');

    // Aplicar configurações iniciais
    applyTheme(savedTheme as 'light' | 'dark' || 'light');
    applyFontSize(savedFontSize as 'normal' | 'large' || 'normal');
    applyContrast(savedContrast === 'true');
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('canticos-theme', newTheme);
  };

  const applyFontSize = (size: 'normal' | 'large') => {
    if (size === 'large') {
      document.body.classList.add('font-size-large');
    } else {
      document.body.classList.remove('font-size-large');
    }
    localStorage.setItem('canticos-fontSize', size);
  };

  const applyContrast = (contrast: boolean) => {
    if (contrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    localStorage.setItem('canticos-highContrast', contrast.toString());
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const toggleFontSize = () => {
    const newSize = fontSize === 'normal' ? 'large' : 'normal';
    setFontSize(newSize);
    applyFontSize(newSize);
  };

  const toggleContrast = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    applyContrast(newContrast);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="fixed bottom-20 right-4 z-50 rounded-full bg-white/80 shadow-md backdrop-blur-sm dark:bg-gray-800/80 md:bottom-6"
            aria-label="Opções de acessibilidade"
          >
            <Eye className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-64 p-4" 
          side="top"
          align="end"
        >
          <h3 className="mb-3 text-center font-medium">Acessibilidade</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Tema</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleTheme}
                aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
              >
                {theme === 'light' ? (
                  <><Moon className="mr-2 h-4 w-4" /> Escuro</>
                ) : (
                  <><Sun className="mr-2 h-4 w-4" /> Claro</>
                )}
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Tamanho do texto</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleFontSize}
                aria-label={fontSize === 'normal' ? 'Aumentar fonte' : 'Reduzir fonte'}
              >
                {fontSize === 'normal' ? (
                  <><ZoomIn className="mr-2 h-4 w-4" /> Aumentar</>
                ) : (
                  <><ZoomOut className="mr-2 h-4 w-4" /> Normal</>
                )}
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Alto contraste</span>
              <Button 
                variant={highContrast ? "default" : "outline"} 
                size="sm" 
                onClick={toggleContrast}
                aria-label={highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'}
              >
                {highContrast ? 'Desativar' : 'Ativar'}
              </Button>
            </div>
          </div>
          
          <p className="mt-4 text-xs text-muted-foreground">
            Essas configurações serão salvas para sua próxima visita.
          </p>
        </PopoverContent>
      </Popover>

      {showScrollTop && (
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-white/80 shadow-md backdrop-blur-sm dark:bg-gray-800/80 md:right-6"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default AccessibilityMenu;
