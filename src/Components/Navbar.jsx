import { useState } from "react";
import Logo from "../assets/Logo.png";
import { CloseLineIcon, Menu1LineIcon } from "../assets/icons";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [open, setopen] = useState(true);

  return (
    <div className="py-5 sticky z-50  top-0 transition-all duration-300 ease-in-out">
      <div className="max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40">
        <div className="  md:flex justify-between items-center  md:border-b md:pb-5">
          <div className="w-full flex justify-center md:mx-0 md:w-[200px] mt-5 md:mt-0 border-b pb-5 md:border-b-0 md:pb-0">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div
            className={`md:flex text-white font-[400] ${
              !open ? "block" : "hidden"
            }`}
          >
            <ul className="grid md:flex gap-5 my-5 md:gap-10 list-none text-[14px] lg:text-[16px] font-[400] py-2">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-[350] md:text-[#ffffff]"
                    : isActive
                    ? "underline"
                    : ""
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-[350] md:text-[#ffffff] "
                    : isActive
                    ? " underline "
                    : ""
                }
              >
                <li>Event</li>
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-[300] md:text-[#ffffff]"
                    : isActive
                    ? " underline "
                    : ""
                }
              >
                <li>Media</li>
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-[350] md:text-[#ffffff]"
                    : isActive
                    ? " underline "
                    : ""
                }
              >
                <li>FAQs</li>
              </NavLink>
            </ul>
          </div>
          {open === true ? (
            <div
              className="absolute top-14 right-4 md:hidden cursor-pointer text-white"
              onClick={() => setopen(false)}
            >
              <Menu1LineIcon />
            </div>
          ) : (
            <div
              className="absolute top-14 right-4 md:hidden cursor-pointer text-white"
              onClick={() => setopen(true)}
            >
              <CloseLineIcon />
            </div>
          )}
          {/* <div className={`md:flex ${!open ? "block" : "hidden"}`}>
            <div className="w-[150px] px-2 py-2 md:px-5 md:py-4 rounded font-[500px] text-white text-center text-[14px] lg:text-[24px] border-2 border-yellow-500 bg-[#000000] transition-all duration-300 ease-in-out">
              <a href="">Contact</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
