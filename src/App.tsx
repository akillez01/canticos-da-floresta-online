import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acervo from "./pages/Acervo";
import Acessibilidade from "./pages/Acessibilidade";
import Admin from "./pages/Admin";
import Agenda from "./pages/Agenda";
import Colabore from "./pages/Colabore";
import Contato from "./pages/Contato";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Sobre from "./pages/Sobre";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/canticos-da-floresta-online">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/acervo" element={<Acervo />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/colabore" element={<Colabore />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/acessibilidade" element={<Acessibilidade />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;