import hamburger from "../../ui/hamburger.png";
import Logo from "../assets/logo-text.png"

function Navbar() {
  return (
    <div className="inter-font border-b border-gray-300 py-4 sticky top-0 bg-white z-50">
      <nav className="relative flex justify-between container mx-auto max-w-7xl">
        <button className="md:hidden">
          <img src={hamburger} alt="" className="w-6 h-6" />
        </button>
        {/* logos */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src={Logo} alt="" />
        </div>
        {/* links in the middle */}
        <ul className="hidden md:flex gap-4 items-center text-[#475569]">
           <li><a href=""><span className="text-[#DB2777]">Home</span></a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>



        <div className="hidden md:flex gap-3">
          <button>Sign In</button>
          <button className="btn bg-pink-600 rounded-l-2xl rounded-r-2xl px-4 py-2 text-white">
            Sign Up
          </button>
        </div>

        <div className="flex md:hidden gap-2 items-center">
          <button>Sign In</button>
          <button className="btn bg-pink-600 rounded-l-2xl rounded-r-2xl px-3 py-1 text-sm">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;