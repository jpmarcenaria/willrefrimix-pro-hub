import { Award, CheckCircle2, Users, Briefcase } from "lucide-react";

const Authority = () => {
  const stats = [
    { icon: Briefcase, value: "10+", label: "Anos de Experiência" },
    { icon: CheckCircle2, value: "3.000+", label: "Projetos Entregues" },
    { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
    { icon: Award, value: "100%", label: "Obras de Alto Padrão" },
  ];

  const brands = ["Daikin", "LG", "Hitachi", "Midea"];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiência Comprovada em Projetos de Alto Padrão
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformamos ambientes residenciais e comerciais com soluções de climatização personalizadas e de alta performance.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Brand Partners */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Parceiros de Excelência
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-2xl md:text-3xl font-bold text-primary/60 hover:text-primary transition-colors duration-300 cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
