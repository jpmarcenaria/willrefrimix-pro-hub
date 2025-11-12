import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Lightbulb, TrendingUp } from "lucide-react";

const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2di00aDRWOGgtNHYtNGgtNHY0aC00djRoNHY0aDR6bS0yMCAwdi00aDR2LTRoLTR2LTRoLTR2NGgtNHY0aDR2NGg0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Users className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Participe da Comunidade VRF
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Técnica, troca de conhecimento e suporte real para profissionais que querem se destacar em projetos de climatização de alto padrão.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MessageCircle className="h-10 w-10 mx-auto mb-3 text-white" />
              <h3 className="font-semibold mb-2">Suporte Técnico</h3>
              <p className="text-sm text-white/80">Tire dúvidas com profissionais experientes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Lightbulb className="h-10 w-10 mx-auto mb-3 text-white" />
              <h3 className="font-semibold mb-2">Compartilhe Conhecimento</h3>
              <p className="text-sm text-white/80">Aprenda com cases reais e experiências práticas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <TrendingUp className="h-10 w-10 mx-auto mb-3 text-white" />
              <h3 className="font-semibold mb-2">Evolua sua Carreira</h3>
              <p className="text-sm text-white/80">Networking e oportunidades de crescimento</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://chat.whatsapp.com/CQv0icXYwohAZkHUFUxvQ4", "_blank")}
          >
            <Users className="mr-2 h-5 w-5" />
            Entrar na Comunidade Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
