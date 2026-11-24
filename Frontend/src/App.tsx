
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import DawnTransition from "./components/home/DawnTransition";
import AppsSection from "./components/apps/AppsSection";
import BehindScenes from "./components/home/BehindScenes";
import WolfExperience from "./components/home/WolfExperience";

function App() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <div className="relative isolate">

          {/* 01 — HERO */}
          <Hero />

          {/* 02 — AMANHECER */}
          <DawnTransition />

          {/* 03 — APLICATIVOS */}
          <AppsSection />

          {/* 04 — BASTIDORES */}
          <BehindScenes />

          {/* LOBO — ENCERRA NOS BASTIDORES */}
          <WolfExperience />

        </div>
      </main>

      {/* 05 — CONTATO E FOOTER */}
      <Footer />
    </>
  );
}

export default App;
