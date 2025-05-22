
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, informe um endereço de e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulando envio (em produção, aqui chamaria uma API)
    setTimeout(() => {
      toast({
        title: "Inscrição realizada!",
        description: "Você agora receberá nossas novidades por e-mail.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-spirit-50 px-4 py-16 dark:bg-spirit-950 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-playfair text-2xl font-semibold text-spirit-900 dark:text-spirit-200 md:text-3xl">
            Receba Atualizações do Projeto
          </h2>
          <p className="mt-3 text-spirit-700 dark:text-spirit-300">
            Inscreva-se para receber novidades sobre lançamentos de vídeos, 
            eventos e atividades do projeto Cânticos da Floresta.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Input
                type="email"
                placeholder="Seu endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 flex-grow rounded-md bg-white dark:bg-spirit-900"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="h-11 rounded-md bg-spirit-600 text-white hover:bg-spirit-700 dark:bg-spirit-700 dark:hover:bg-spirit-600"
              >
                {isSubmitting ? 'Inscrevendo...' : 'Inscrever-se'}
              </Button>
            </div>
          </form>
          
          <p className="mt-4 text-xs text-spirit-600 dark:text-spirit-400">
            Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
