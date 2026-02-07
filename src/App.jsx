import About from "./Components/About";
import Campus from "./Components/Campus";
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Program from "./Components/Program"
import Testimonials from "./Components/Testimonials";
import Title from "./Components/Title"


const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 xl:px-40 space-y-24 py-20">
        <section id="program">
          <Title subTitle="OUR PROGRAM" title="What We Offer" />
          <Program />
        </section>
                  
        <section id="about">
          <About />
        </section>

        <section id="gallery">
          <Title subTitle="GALLERY" title="Campus Photos" />
          <Campus />
        </section>

        <section id="testimonials" className="">
          <Title subTitle="TESTIMONIALS" title="What Student Says" />
          <Testimonials />
        </section>
      </main>
    </div>
  );
};

export default App