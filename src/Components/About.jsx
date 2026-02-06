import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
      {/* Left Section - Image & Play Icon */}
      <div className="relative lg:basis-[40%]">
        
        <img className="w-full rounded-xl" src={about_img} alt="About University" />

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="w-14 md:w-16 cursor-pointer hover:scale-110 transition-transform duration-300 drop-shadow-md"
            src={play_icon}
            alt="Play Video Icon"
          />
        </div>

      </div>

      {/* Right Section - Text Content*/}
      <div className="w-full lg:basis-[56%]">
        <h3 className="text-blue-700 font-bold">ABOUT UNIVERSITY</h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 mb-3 leading-tight">Nurturing Tomorrow's leaders Today</h2>
        <div className="text-gray-600 space-y-2 text-sm text-start">
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
