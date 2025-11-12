import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Cliente - Mansão Guarujá",
      role: "Residência de Alto Padrão - 20 Ambientes",
      content: "Sistema completamente invisível e silencioso. A operação é impecável e o conforto térmico em todos os ambientes é perfeito. Recomendo totalmente o trabalho da WillRefrimix.",
      rating: 5,
    },
    {
      name: "Condomínio Marina Guarujá",
      role: "Residência Premium",
      content: "Instalação perfeita com sistema VRV que atende todos os nossos requisitos. A manutenção mensal garante operação contínua e eficiente. Excelente trabalho!",
      rating: 5,
    },
    {
      name: "Profissional Capacitado",
      role: "Técnico em HVAC",
      content: "A consultoria me ajudou a evoluir profissionalmente na área de sistemas VRF. Hoje consigo executar projetos complexos com confiança graças ao suporte técnico recebido.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Depoimentos & Cases de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a experiência de quem confia no nosso trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Veja mais projetos e depoimentos no nosso Instagram
          </p>
          <a
            href="https://www.instagram.com/willrefrimix/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors duration-200"
          >
            @willrefrimix
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
