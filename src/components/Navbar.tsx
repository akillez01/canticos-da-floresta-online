
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from "@/components/ui/button";
import { 
  Sheet,
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Acervo', href: '/acervo' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Acessibilidade', href: '/acessibilidade' },
  { name: 'Contato', href: '/contato' },
  { name: 'Colabore', href: '/colabore' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 py-2 shadow backdrop-blur dark:bg-gray-900/90' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container flex items-center justify-between px-4">
        <Link to="/" className="flex-shrink-0">
          <Logo className={`transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-forest-700 transition-colors hover:bg-forest-50 hover:text-forest-900 dark:text-forest-300 dark:hover:bg-forest-900 dark:hover:text-forest-50"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav>
                <ul className="space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-forest-700 transition-colors hover:bg-forest-50 hover:text-forest-900 dark:text-forest-300 dark:hover:bg-forest-900 dark:hover:text-forest-50"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
