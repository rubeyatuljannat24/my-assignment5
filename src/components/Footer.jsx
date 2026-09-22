import fLogo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-400">
      <div className="container mx-auto  px-2 py-8 ">
        <div className="grid grid-cols-4 gap-2">
          {/* footer top left*/}
          <div className="pl-14 ">
            <img className="h-9 w-auto" src={fLogo} alt="" />
            <p className="text-xs text-[#64748B] mt-3 ">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-4 flex gap-4 text-xs text-[#475569]">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          {/* footer top right */}
          <div>
            <h3 className="text-xs font-bold mb-3 text-[#0F172A] ">PRODUCT</h3>
            <ul className="text-xs space-y-2 text-[#64748B]">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold mb-3 text-[#0F172A] ">COMPANY</h3>
            <ul className="text-xs space-y-2 text-[#64748B]">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold mb-3 text-[#0F172A] ">LEGAL</h3>
            <ul className="text-xs space-y-2 text-[#64748B]">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        {/* footer bottom */}
        <div className="flex justify-between items-center text-xs border-t mt-9 pt-5 pl-14 border-gray-200">
          <p className="text-[#94A3B8]">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-4 text-[#94A3B8]">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
