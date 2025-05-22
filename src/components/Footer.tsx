
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-forest-900 px-4 py-12 text-white md:py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Logo e informações */}
            <div className="md:col-span-1">
              <Logo className="mb-4" />
              <p className="mt-3 text-sm text-forest-300">
                Preservando e celebrando a música sagrada do Santo Daime através de encontros que transcendem fronteiras culturais e espirituais.
              </p>
            </div>
            
            {/* Links rápidos */}
            <div className="md:col-span-1">
              <h3 className="mb-3 text-lg font-medium text-white">Links Rápidos</h3>
              <ul className="space-y-2 text-forest-300">
                <li>
                  <Link to="/" className="link-underline hover:text-forest-100">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="link-underline hover:text-forest-100">
                    Sobre o Projeto
                  </Link>
                </li>
                <li>
                  <Link to="/acervo" className="link-underline hover:text-forest-100">
                    Acervo Audiovisual
                  </Link>
                </li>
                <li>
                  <Link to="/agenda" className="link-underline hover:text-forest-100">
                    Agenda de Eventos
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Mais links */}
            <div className="md:col-span-1">
              <h3 className="mb-3 text-lg font-medium text-white">Recursos</h3>
              <ul className="space-y-2 text-forest-300">
                <li>
                  <Link to="/acessibilidade" className="link-underline hover:text-forest-100">
                    Acessibilidade
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="link-underline hover:text-forest-100">
                    Fale Conosco
                  </Link>
                </li>
                <li>
                  <Link to="/colabore" className="link-underline hover:text-forest-100">
                    Como Colaborar
                  </Link>
                </li>
                <li>
                  <a href="#" className="link-underline hover:text-forest-100">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contato */}
            <div className="md:col-span-1">
              <h3 className="mb-3 text-lg font-medium text-white">Contato</h3>
              <ul className="space-y-2 text-forest-300">
                <li>
                  <a href="mailto:contato@canticosdafloresta.org" className="link-underline hover:text-forest-100">
                    contato@canticosdafloresta.org
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-forest-100">
                    Canal no YouTube
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-forest-100">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-forest-100">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-forest-700 pt-6 text-center text-sm text-forest-400">
            <p>© {new Date().getFullYear()} Cânticos da Floresta. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
