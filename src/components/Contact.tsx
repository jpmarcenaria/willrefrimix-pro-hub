import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Linkedin, Link as LinkIcon, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  const links = [
    {
      icon: LinkIcon,
      label: "Bio & Contatos",
      description: "Todos os links em um só lugar",
      url: "https://meuairgo.com.br/willrefrimix",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      description: "Acompanhe nossos projetos",
      url: "https://www.instagram.com/willrefrimix/",
      color: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      description: "Fale conosco agora",
      url: "https://wa.me/5513974139382",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      icon: Youtube,
      label: "YouTube",
      description: "Em breve",
      url: "#",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      disabled: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      description: "Em breve",
      url: "#",
      color: "bg-gradient-to-br from-blue-600 to-blue-700",
      disabled: true,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o canal que preferir para se conectar conosco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <Button
              key={index}
              disabled={link.disabled}
              className={`${link.color} ${
                link.disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              } h-auto p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => !link.disabled && window.open(link.url, "_blank")}
            >
              <div className="flex items-center gap-4 w-full">
                <link.icon className="h-8 w-8 flex-shrink-0" />
                <div className="text-left flex-grow">
                  <div className="font-semibold text-lg">{link.label}</div>
                  <div className="text-sm text-white/80">{link.description}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="max-w-2xl mx-auto mt-16 bg-card p-8 rounded-xl shadow-md border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Informações de Contato
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-primary" />
              <div>
                <div className="font-semibold text-foreground">WhatsApp</div>
                <div className="text-muted-foreground">+55 13 97413-9382</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <div className="font-semibold text-foreground">E-mail</div>
                <div className="text-muted-foreground">contato@willrefrimix.com.br</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="text-sm font-semibold text-foreground mb-2">Chave Pix</div>
              <div className="text-sm text-muted-foreground">Disponível via WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
