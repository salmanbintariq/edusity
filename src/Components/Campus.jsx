import gallery_1 from "../assets/gallery-1.png";
import gallery_2 from "../assets/gallery-2.png";
import gallery_3 from "../assets/gallery-3.png";
import gallery_4 from "../assets/gallery-4.png";
import whiteArrow from '../assets/white-arrow.png';

const GALLERY_DATA = [
  { id: 1, image: gallery_1, alt: "Students in library" },
  { id: 2, image: gallery_2, alt: "Campus main building" },
  { id: 3, image: gallery_3, alt: "University laboratory" },
  { id: 4, image: gallery_4, alt: "Graduation ceremony" },
];

const Campus = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      {/* Grid Container - Now it fills the space provided by App.jsx */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
        {GALLERY_DATA.map(({ id, image, alt }) => (
          <div key={id} className="overflow-hidden rounded-xl shadow-sm">
            <img className="w-full block hover:scale-105 transition-transform duration-500" src={image} alt={alt} />
          </div>
        ))}
      </div>

      <button className="bg-[#212EA0] text-white flex items-center gap-3 px-8 py-3 rounded-full cursor-pointer hover:bg-[#1a2480] transition-all">
        See more here
        <img src={whiteArrow} className="w-4" alt="arrow" />
      </button>
    </div>
  );
};
export default Campus;
