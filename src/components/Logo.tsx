import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

const Logo = ({ className = '', textClassName = '', showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Ícone com ondas sonoras animadas */}
      <div className="relative h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-forest-600 dark:text-forest-400">
        {/* Ícone principal */}
        <FontAwesomeIcon icon={faMusic} size="2x" className="z-10" />

        {/* Ondas sonoras animadas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute h-8 w-8 rounded-full border-2 border-forest-400 opacity-0 animate-sound-wave" />
          <div className="absolute h-8 w-8 rounded-full border-2 border-forest-400 opacity-0 animate-sound-wave [animation-delay:0.3s]" />
          <div className="absolute h-8 w-8 rounded-full border-2 border-forest-400 opacity-0 animate-sound-wave [animation-delay:0.6s]" />
        </div>
      </div>

      {/* Texto do Logo */}
      {showText && (
        <div className={`ml-2 flex flex-col leading-tight ${textClassName}`}>
          <span className="font-playfair text-lg font-medium tracking-tight text-forest-800 dark:text-forest-200 md:text-xl">
            Cânticos
          </span>
          <span className="font-playfair text-sm tracking-wide text-forest-600 dark:text-forest-400 md:text-base">
            da Floresta
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;