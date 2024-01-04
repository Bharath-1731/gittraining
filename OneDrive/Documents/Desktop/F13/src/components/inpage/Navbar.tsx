import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../../components/ui/button";
import { Link as RouteLink } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import LogoSvg from "/assets/images/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className=" flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer gap-2">
            <span>
              <img src={LogoSvg} alt="logo" />
            </span>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <ScrollLink
              to="home"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </ScrollLink>

            <ScrollLink
              to="about"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </ScrollLink>

            <ScrollLink
              to="features"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Features
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </ScrollLink>

            <ScrollLink
              to="team"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Team
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </ScrollLink>
          </nav>

          <div className=" hidden lg:flex gap-6">
            <RouteLink to="/signin">
              <Button className="px-6 py-1 bg-[#471853] hover:text-[#e6c0ef] transition-all rounded-full">
                Login
              </Button>
            </RouteLink>
            <RouteLink to="/signup">
              <Button className="px-6 py-1 bg-[#471853] hover:text-[#e6c0ef] transition-all rounded-full">
                Sign Up
              </Button>
            </RouteLink>
          </div>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-50 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <ScrollLink
            to="home"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="features"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="products"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Team
          </ScrollLink>

          <RouteLink to="/signin">
            <Button className="px-6 py-1 bg-[#471853] hover:text-[#e6c0ef] transition-all rounded-full">
              Login
            </Button>
          </RouteLink>
          <RouteLink to="/signup">
            <Button className="px-6 py-1 bg-[#471853] hover:text-[#e6c0ef] transition-all rounded-full">
              Sign Up
            </Button>
          </RouteLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
