import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AnuncieBar from "@/components/AnuncieBar";
import ErrorBoundary from "@/components/ErrorBoundary";
import TestAPI from "@/components/TestAPI";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <AnuncieBar />
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <Footer />
      <TestAPI />
    </div>
  );
}
