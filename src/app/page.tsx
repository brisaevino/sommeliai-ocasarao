import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AnuncieBar from "@/components/AnuncieBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <AnuncieBar />
      <Hero />
      <Footer />
    </div>
  );
}
