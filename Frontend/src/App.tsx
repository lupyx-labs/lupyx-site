
import Header from "./components/layout/Header";

import Hero from "./components/home/Hero";
import WolfExperience from "./components/home/WolfExperience";
import DawnTransition from "./components/home/DawnTransition";

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

          {/* Lobo interativo */}
          <WolfExperience />

        </div>
      </main>
    </>
  );
}

export default App;
