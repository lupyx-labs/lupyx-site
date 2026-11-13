
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-lupyx-navy px-6 text-center">

        <h1 className="font-heading text-5xl font-bold text-lupyx-white">
          Lupyx
        </h1>

        <p className="font-body text-lg text-lupyx-ice">
          Estúdio independente de produtos digitais.
        </p>

      </main>
    </>
  );
}

export default App;
