import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu-icon.png";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // This check covers window scroll, body scroll, and documentElement scroll
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop;

      // console.log("Scroll Position:", scrollTop); // This should now show numbers

      if (scrollTop > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // We add the listener to window, but we check documentElement inside
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-4 sm:px-12 lg:px-24 xl:px-40 py-3 flex justify-between items-center text-white fixed w-full top-0 z-100 transition-all duration-500 ${sticky ? "bg-[#212EA0] shadow-lg py-2" : "bg-transparent py-4"}`}
    >
      <img src={logo} className="w-32 sm:w-40" alt="nav-logo" />

      {/* Mobile Sidebar */}
      <div
        className={`relative text-white sm:text-sm
         ${!isMenuOpen ? "max-md:w-0 overflow-hidden" : "max-md:w-60 max-md:pl-10"}
         max-md:fixed top-0 right-0 bottom-0 max-md:min-h-screen max-md:h-full max-md:flex-col
         max-md:bg-blue-600 max-md:text-white max-md:pt-20 flex lg:items-center transition-all
         `}
      >
        <IoMdClose
          className="text-3xl absolute right-4 top-4 lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />

        <ul className="flex flex-col gap-5 md:flex md:flex-row md:items-center md:gap-7 transition-all">
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer md:hover:border-b"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="program"
              smooth={true}
              offset={-200}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer md:hover:border-b"
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              to="about-us"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer md:hover:border-b"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="campus"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer md:hover:border-b"
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-160}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer md:hover:border-b"
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-90}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-[#212121] px-6 py-2.5 rounded-full md:mr-2 cursor-pointer hover:scale-105 transition-all inline-block text-center"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu icon */}
      <img
        src={menuIcon}
        className="w-7 md:hidden cursor-pointer"
        alt="menu"
        onClick={() => setIsMenuOpen(true)}
      />
    </nav>
  );
};

export default Navbar;
