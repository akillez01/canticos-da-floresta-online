
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AccessibilityMenu from "@/components/AccessibilityMenu";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-grow flex-col items-center justify-center bg-forest-50 px-4 py-16 dark:bg-forest-900/40">
        <div className="text-center">
          <h1 className="font-playfair text-6xl font-bold text-forest-800 dark:text-forest-200">404</h1>
          <p className="mt-4 text-xl text-forest-600 dark:text-forest-300">
            Parece que você se perdeu na floresta...
          </p>
          <p className="mt-2 text-forest-500 dark:text-forest-400">
            A página que você está procurando não existe.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button className="bg-forest-600 text-white hover:bg-forest-700">
                Voltar para o início
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
};

export default NotFound;
