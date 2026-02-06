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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {PROGRAM_DATA.map(({ id, image, icon, label }) => (
        <div key={id} className="relative group overflow-hidden rounded-xl cursor-pointer shadow-md">
          
          {/* Main Image */}
          <img 
            src={image} 
            className="w-full block transition-transform duration-700 group-hover:scale-105" 
            alt={label} 
          />
          
          {/* Overlay - Using bg-[#212EA0] to match your theme */}
          <div className="absolute inset-0 bg-[#212EA0]/70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <img className="w-16 mb-2" src={icon} alt="" aria-hidden="true" />
            <p className="font-bold text-lg">{label}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Program;
