import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";

import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";
import { useRef } from "react";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Emily Williams",
    location: "Edusity, USA",
    img: user_1,
    text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community and state-of-the-art facilities have truly surpassed my expectations.",
  },
  {
    id: 2,
    name: "William Jackson",
    location: "Edusity, USA",
    img: user_2,
    text: "The academic excellence and faculty mentorship at Edusity have shaped my career in ways I never imagined. I am grateful for the hands-on learning opportunities.",
  },
  {
    id: 3,
    name: "Sophia Bennett",
    location: "Edusity, UK",
    img: user_3,
    text: "The global perspective I gained here is invaluable. The cultural diversity on campus makes every discussion rich and insightful.",
  },
  {
    id: 4,
    name: "James Miller",
    location: "Edusity, Canada",
    img: user_4,
    text: "Edusity provides a perfect balance of theory and practice. The career services team helped me land my dream internship before graduation.",
  },
];

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  // Slide Forward Function
  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  // Slide Backward Function
  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="relative px-12 md:px-2">
      {/* Navigation Arrows */}
      <img
        className="absolute top-1/2 right-1 md:-right-12.5 -translate-y-1/2 w-9 md:w-11 p-2.5 md:p-3 bg-[#212EA0] rounded-full cursor-pointer z-10"
        src={next_icon}
        alt="next_arrow_icon"
        onClick={slideForward}
      />
      <img
        className="absolute top-1/2 left-1 md:-left-12.5 -translate-y-1/2 w-9 md:w-11 p-2.5 md:p-3 bg-[#212EA0] rounded-full cursor-pointer z-10"
        src={back_icon}
        alt="back_arrow_icon"
        onClick={slideBackward}
      />

      {/* Slider */}
      <div className="overflow-hidden">
        <ul ref={slider} className="flex w-[400%] md:w-[200%] transition-transform duration-500">
          {TESTIMONIAL_DATA.map(({ id, name, img, location, text }) => (
            <li key={id} className="w-full p-2 md:p-5">
              {/* The Card */}
              <div className="card-container shadow p-4 md:p-8 rounded-xl bg-white border border-gray-100 h-full flex flex-col">
                {/* 1.Header Area */}
                <div className="flex flex-col md:flex-row md:items-center items-start gap-4 mb-5">
                  <img
                    src={img}
                    className="block w-14 md:w-16 rounded-full border-4 border-[#212EA0]"
                    alt=""
                  />
                  <div>
                    <h3 className="text-[#212EA0] text-sm md:text-lg font-bold leading-tight">
                      {name}
                    </h3>
                    <span className="text-gray-500 text-xs md:text-sm">{location}</span>
                  </div>
                </div>

                {/* 2.Message Area */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
