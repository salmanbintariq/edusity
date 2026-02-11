
const Footer = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-center justify-between text-sm border-[#797979] py-4 max-w-275 border-t">
      <p>© 2026 Edusity. All rights reserved.</p>
      <ul className="flex gap-5 mt-3 md:mt-0">
        <li className="cursor-pointer hover:text-[#212EA0] transition duration-300">Terms of Services</li>
        <li className="cursor-pointer hover:text-[#212EA0] transition duration-300">Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer