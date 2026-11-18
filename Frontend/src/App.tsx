
import Header from "./components/layout/Header";

import Hero from "./components/home/Hero";
import WolfExperience from "./components/home/WolfExperience";
import DawnTransition from "./components/home/DawnTransition";
import AppsSection from "./components/apps/AppsSection";


function App() {
  return (
    <>
      <Header />

      <main className="pt-20">

        {/* Área compartilhada da experiência */}
        <div className="relative isolate">

          {/* Conteúdo principal */}
          <Hero />

          <DawnTransition />

          <AppsSection />

          {/* Lobo interativo */}
          <WolfExperience />

        </div>
      </main>
    </>
  );
}

export default App;
