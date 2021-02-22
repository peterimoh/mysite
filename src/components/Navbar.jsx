import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/navbar.css";
import "../components/Responsive.css";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
// icons
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function Navbar({ darkTheme, setDarkTheme }) {
  const [openNav, setOpenNav] = useState();

  function openSidebar() {
    setOpenNav(true);
  }

  function closeSidebar() {
    setOpenNav(false);
  }

  return (
    <>
      <div className="off_canvars_overlay"></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={
                  openNav
                    ? "offcanvas_menu_wrapper open"
                    : "offcanvas_menu_wrapper"
                }
              >
                <div className="canvas_close">
                  <a>
                    <CloseIcon onClick={closeSidebar} className="close-btn" />
                  </a>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="$">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <LinkedInIcon />
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <GitHubIcon />
                      </a>
                    </li>
                  </ul>
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <a className="page-scroll" href="#home-div">
                        Home
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a className="page-scroll" href="#about-div">
                        About Me
                      </a>
                    </li>
                    <li className="menu-item-has-children ">
                      <a className="page-scroll" href="#project-div">
                        Projects
                      </a>
                    </li>
                    <li className="menu-item-has-children ">
                      <a className="page-scroll" href="#faqs">
                        Contact me
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas_footer">
                  <span>
                    <a href="mailto:peterimoh2@gmail.com">
                      <EmailIcon /> Peterimoh20@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area sticky-top header-v1-area">
        <div className="header-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="navigation">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html">
                      <img src={logo1} alt="dev-imoh" className="logo" />
                    </a>

                    {/* logo */}
                    <span className="side-menu__toggler canva_open">
                      <button
                        className="theme-controller"
                        onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
                      >
                        {darkTheme ? <WbSunnyIcon /> : <Brightness3Icon />}
                      </button>
                      <MenuIcon onClick={openSidebar} />
                    </span>

                    <div className="collapse navbar-collapse sub-menu-bar main-nav__main-navigation">
                      <ul className="navbar-nav ml-auto main-nav__navigation-box">
                        <li className="nav-item active">
                          <a href="#home-div">home</a>
                        </li>
                        <li className="nav-item active">
                          <a href="#about-div">about me</a>
                        </li>
                        <li className="nav-item active">
                          <a href="#project-div">projects</a>
                        </li>
                        <li className="nav-item active">
                          <a href="#">contact me</a>
                        </li>
                        <button
                          className="theme-controller big-screen"
                          onClick={() =>
                            setDarkTheme((prevTheme) => !prevTheme)
                          }
                        >
                          {darkTheme ? <WbSunnyIcon /> : <Brightness3Icon />}
                        </button>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
