import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ManifestoHero from "./components/home/ManifestoHero";
import MarqueeTicker from "./components/home/MarqueeTicker";
import FormatOverview from "./components/home/FormatOverview";
import SessionsSection from "./components/home/SessionsSection";
import CollaborateCta from "./components/home/CollaborateCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4">
        <ManifestoHero />
        <MarqueeTicker />
        <FormatOverview />
        <SessionsSection />
        <CollaborateCta />
      </main>

      <Footer />
    </div>
  );
}
