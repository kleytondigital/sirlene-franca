
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const Footer = () => {
  const { settings } = useAdmin();

  return (
    <footer className="bg-primary border-t border-golden/20 py-12" id="inscricoes">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-serif text-golden mb-4">
            Curso de Automaquiagem - Sirlene Franca
          </h3>
          <p className="text-white/80 mb-6">
            Transformando vidas através da beleza e autoestima
          </p>
          
          <div className="mb-8">
            <p className="text-white/80 text-lg mb-4">
              Próxima turma: <strong className="text-golden">25 de Agosto de 2025</strong>
            </p>
            <p className="text-white/60">
              Para mais informações e inscrições, entre em contato:
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href={settings.instagramLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-golden/30 flex items-center justify-center hover:border-golden hover:bg-golden/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-golden" />
            </a>
            <a 
              href={settings.linkedinLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-golden/30 flex items-center justify-center hover:border-golden hover:bg-golden/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-golden" />
            </a>
            <a 
              href={settings.emailContact} 
              className="w-12 h-12 rounded-full border-2 border-golden/30 flex items-center justify-center hover:border-golden hover:bg-golden/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-golden" />
            </a>
          </div>
          
          <div className="border-t border-golden/20 pt-8 text-center text-sm text-white/60 space-y-2">
            <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
            <p>Todo o conteúdo é de responsabilidade de Sirlene Franca.</p>
            <p>© 2025 Sirlene Franca - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
