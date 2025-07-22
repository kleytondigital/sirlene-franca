import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-golden/20 py-12" id="inscricoes">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-golden mb-8">
            Projeto Recomeço
          </h3>
          
          <div className="mb-8">
            <p className="text-white/80 text-lg mb-4">
              Próxima edição: <strong className="text-golden">14 de Maio de 2025</strong>
            </p>
            <p className="text-white/60">
              Para mais informações e inscrições, entre em contato:
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full border-2 border-golden/30 flex items-center justify-center hover:border-golden hover:bg-golden/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-golden" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full border-2 border-golden/30 flex items-center justify-center hover:border-golden hover:bg-golden/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-golden" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full border-2 border-golden/30 flex items-center justify-center hover:border-golden hover:bg-golden/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-golden" />
            </a>
          </div>
          
          <div className="border-t border-golden/20 pt-8">
            <p className="text-white/60 text-sm">
              © 2024 Projeto Recomeço. Desenvolvido por Fran Amaral.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;