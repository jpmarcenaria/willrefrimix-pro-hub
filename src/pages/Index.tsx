import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Authority />
      <Services />
      <Testimonials />
      <Community />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
