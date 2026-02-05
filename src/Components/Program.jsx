import program_1 from "../assets/program-1.png";
import program_2 from "../assets/program-2.png";
import program_3 from "../assets/program-3.png";
import program_icon_1 from "../assets/program-icon-1.png";
import program_icon_2 from "../assets/program-icon-2.png";
import program_icon_3 from "../assets/program-icon-3.png";

// 1. Move data to a constant configuration object
const PROGRAM_DATA = [
  { id: 1, image: program_1, icon: program_icon_1, label: "Graduation Degree" },
  { id: 2, image: program_2, icon: program_icon_2, label: "Masters Degree" },
  { id: 3, image: program_3, icon: program_icon_3, label: "Post Graduation" },
];

const Program = () => {
  return (
    <section id="program" className="px-4 sm:px-12 lg:px-24 xl:px-40 py-14">
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto">
        
        {PROGRAM_DATA.map(({ id, image, icon, label }) => (
          <div key={id} className="relative group overflow-hidden rounded-xl cursor-pointer">
            {/* Main Image */}
            <img 
              src={image} 
              className="w-full block transition-transform duration-500 group-hover:scale-110" 
              alt={label} 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/30 flex flex-col items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
              <img className="w-14 mb-2.5" src={icon} alt="" aria-hidden="true" />
              <p className="font-semibold">{label}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Program;