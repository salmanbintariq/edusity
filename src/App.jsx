import About from "./Components/About";
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Program from "./Components/Program"
import Title from "./Components/Title"


const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto space-y-20 py-20">
        <section>
          <Title subTitle="OUR PROGRAM" title="What We Offer" />
          <Program />
        </section>
                  
        <section>
          <About />
        </section>
      </main>
    </div>
  );
};

export default App