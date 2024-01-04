import { Link, NavLink, useLocation } from "react-router-dom";

import { INavLink } from "../../types";
import { sidebarLinks } from "../../constants";
import { Button } from "../ui/button";
import LogoSvg from "/assets/images/logo.png";
import ProfileSvg from "/assets/icons/profile-placeholder.svg";
import LogoutSvg from '/assets/icons/logout.svg'

interface LeftbarProps {
  logOut: () => void;
}

const Leftbar: React.FC<LeftbarProps> = (props) => {
  const handleLogout = () => {
    props.logOut();
  };
  const {pathname} = useLocation();


  return (
    <nav className="leftbar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img src={LogoSvg} alt="logo" width={170} height={36} />
        </Link>

        <Link to="" className="flex gap-3 items-center">
          <img
            src={ProfileSvg}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            // <p className="body-bold"></p>
            // <p className="small-regular text-light-3"></p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li key={link.label}
              className={`leftbar-link group ${
                isActive && "bg-primary-500"
              }`}>
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        </div>
        <Button
          variant="ghost"
          className="shad-button_ghost" onClick={handleLogout}>
          <img src={LogoutSvg} alt="logout" />
          <p className="small-medium lg:base-medium">Logout</p>
        </Button>
    </nav>
  );
};

export default Leftbar;
