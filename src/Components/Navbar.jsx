import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='px-4 sm:px-12 lg:px-24 xl:px-40 py-2 flex justify-between items-center text-white fixed w-full top-0 z-20'>
      <img src={logo} className='w-32 sm:w-40' alt="" />
      <ul className='flex items-center gap-7 text-sm transition-all'>
        <li><a href="#" className='sm:hover:border-b'>Home</a></li>
        <li><a href="#program" className='sm:hover:border-b'>Program</a></li>
        <li><a href="#about-us" className='sm:hover:border-b'>About us</a></li>
        <li><a href="#campus" className='sm:hover:border-b'>Campus</a></li>
        <li><a href="#testimonial" className='sm:hover:border-b'>Testimonial</a></li>
        <li>
          <button className='bg-white text-[#212121] px-6 py-2.5 rounded-4xl cursor-pointer hover:scale-105 transition-all'>
            Contact us
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar