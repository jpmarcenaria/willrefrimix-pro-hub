import { Button } from "@/components/ui/button";
import { Lightbulb, FileText, Users as UsersIcon, ClipboardCheck, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Projetos Personalizados",
      description: "Projetos de climatização sob medida para residências e estabelecimentos comerciais de alto padrão. Transformamos seu rascunho em um projeto executivo com diagrama técnico completo.",
      cta: "Solicitar Orçamento",
      link: "https://wa.me/5513974139382",
    },
    {
      icon: Lightbulb,
      title: "Consultorias Técnicas",
      description: "Orientação especializada para profissionais que desejam evoluir na área, mesmo sem experiência prévia em sistemas VRV/VRF.",
      cta: "Quero Evoluir na Área",
      link: "https://wa.me/5513974139382",
    },
    {
      icon: ClipboardCheck,
      title: "Diagnósticos e Soluções",
      description: "Avaliação detalhada de sistemas existentes e recomendações para otimização de performance e eficiência energética.",
      cta: "Agendar Diagnóstico",
      link: "https://wa.me/5513974139382",
    },
    {
      icon: UsersIcon,
      title: "Treinamentos",
      description: "Capacitação técnica para profissionais e equipes sobre instalação, manutenção e operação de sistemas de climatização avançados.",
      cta: "Saiba Mais",
      link: "https://wa.me/5513974139382",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Oferecemos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para projetos de climatização e desenvolvimento profissional na área.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open(service.link, "_blank")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {service.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Special CTA for Architects */}
        <div id="architects" className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 rounded-xl border border-primary/20 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Arquitetos: Paremos as Dores de Cabeça com Ar-Condicionado nas Suas Obras
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Oferecemos consultoria especializada para garantir que seus projetos de climatização sejam executados com perfeição, evitando retrabalho e problemas futuros.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open("https://wa.me/5513974139382", "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Fale Agora e Tenha Tranquilidade nos Seus Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
