import heroImage from "../assets/hero.png";
import darkArrow from "../assets/dark-arrow.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-12 lg:px-24 xl:px-40 text-center text-white">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7))]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-6xl font-extrabold leading-16">
          We Ensure better education <br /> for a better world
        </h1>

        <p className="max-w-2xl text-sm sm:text-lg text-white/90 leading-6">
          Our cutting-edge curriculum empowers students with the knowledge,
          skills, and experiences needed to excel in the modern world.
        </p>

        <button className="bg-white text-[#212121] text-sm flex items-center gap-2 px-6 py-2.5 rounded-full cursor-pointer hover:scale-105 transition-transform">
          Explore More
          <img src={darkArrow} width={16} alt="arrow" />
        </button>
      </div>

    </section>
  );
};

export default Hero;
