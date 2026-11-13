
import Header from "./components/layout/Header";
import Wolf from "./components/home/Wolf";

function App() {
  return (
    <>
      <Header />

      
      <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#031427] pt-20">
        <div
          className="
            w-[110%]
            max-w-[540px]
            translate-x-48
            -scale-x-100

            lg:w-[860px]
            lg:max-w-none
            lg:translate-x-64
          "
        >
          <Wolf />
        </div>
      </main>
    </>
  );
}

export default App;
