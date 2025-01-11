import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HiOutlineHome } from "react-icons/hi";
import { WiStars } from "react-icons/wi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { IoFlashOutline } from "react-icons/io5";
import { VscGraphLine } from "react-icons/vsc";
import { LuNotepadText } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { path: "/dashboard", name: "Dashboard", icon: <HiOutlineHome /> },
    { path: "/first-guru", name: "FirstGuru", icon: <WiStars /> },
    { path: "/town-hall", name: "TownHall", icon: <TbBuildingFactory2 /> },
    {
      path: "/all-evaluation",
      name: "All Evaluation",
      icon: <IoFlashOutline />,
    },
    { path: "/performance", name: "Performance", icon: <VscGraphLine /> },
    { path: "/mock-test", name: "Mock Test", icon: <LuNotepadText /> },
  ];
  return (
    <div className="bg-[#303947]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink className={"text-mygray"} to={link.path}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-1">
            <img className="w-8 md:w-10" src={logo} alt="logo" />
            <span className="md:text-3xl text-white">Firstbench</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  className={
                    "text-mygray text-base flex items-center font-semibold"
                  }
                  to={link.path}
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end text-white flex items-center gap-4">
          <div className="text-lg">
            <FaRegBell />
          </div>
          <ul className="menu menu-horizontal  bg-gray-800 rounded-lg p-1">
            <h3 className="bg-[#f8c2b3] px-3 py-2 rounded-md">P</h3>
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="bg-base-100 rounded-t-none p-2 text-black">
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
