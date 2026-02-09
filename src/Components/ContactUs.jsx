import message_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import white_arrow from "../assets/white-arrow.png";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 my-20 mx-auto max-w-275">
      {/* Left Column */}
      <div className="md:basis-[48%] flex flex-col gap-5 text-[#676767]">
        <h3 className="text-black text-2xl sm:text-3xl flex items-center gap-3 font-bold">
          Send us a message <img src={message_icon} className="w-8" alt="" />
        </h3>
        <p className="max-w-112.5 text-md">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community
        </p>

        <ul className="flex flex-col gap-5 mt-2">
          <li className="flex items-center gap-3">
            <img src={mail_icon} className="w-6" alt="mail-icon" />
            Contact@Edusity.dev
          </li>
          <li className="flex items-center gap-3">
            <img src={phone_icon} className="w-6" alt="phone-icon" />
            +1 123-456-7890
          </li>
          <li className="flex items-center gap-3">
            <img src={location_icon} className="w-6" alt="location-icon" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>

      {/* Right Column */}
      <div className="md:basis-[52%] text-[#676767]">
        <form>
          {/* 1. Name Field */}
          <label className="block font-medium">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="block bg-blue-50 w-full p-3 rounded-sm text-sm border-0 outline-0 mb-4"
          />

          {/* 2. Phone Field */}
          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
            className="block w-full bg-[#EBECFE] p-4 rounded-sm text-sm border-0 outline-0 mb-4"
          />

          {/* 3. Message Field */}
          <label className="block font-medium">Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="block w-full bg-[#EBECFE] p-4 rounded-md text-sm border-0 outline-0 mb-4 resize-none"
          ></textarea>

          <button
            className="flex items-center justify-center gap-2 bg-[#212EA0] text-white text-md py-3 px-7 cursor-pointer rounded-full"
            type="submit"
          >
            Submit now{" "}
            <img src={white_arrow} className="w-5" alt="submit-button" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
