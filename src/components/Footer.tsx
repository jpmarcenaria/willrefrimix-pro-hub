import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">WillRefrimix</div>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Acompanhe nossos bastidores e projetos técnicos no Instagram
          </p>
          <a
            href="https://www.instagram.com/willrefrimix/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200 text-lg font-semibold"
          >
            <Instagram className="h-6 w-6" />
            @willrefrimix
          </a>
          <div className="mt-8 pt-8 border-t border-white/20 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} WillRefrimix. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
