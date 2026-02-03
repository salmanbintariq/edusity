import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Program from "./Components/Program"
import Title from "./Components/Title"

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto space-y-20 py-20">
        <section>
          <Title subTitle="OUR PROGRAM" title="What We Offer" />
          <Program />
        </section>
        
        {/* You can easily add more sections here */}
      </main>
    </div>
  );
};

export default App