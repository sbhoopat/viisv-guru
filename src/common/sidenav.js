import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import HomeIcon from '@mui/icons-material/Home';
// import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const SideNav = () => {
  // const userContext = useContext(UserContext);
  const location = useLocation();
  const pagePath = location.pathname;
  const naviagte = useNavigate();
  const [activeMenuId, setActiveMenuId] = useState();
  // const [toggleHamburger, setToggleHamburger] = useState(false);
  // const onToggleHamburger = (flag) => {
  //   setToggleHamburger(flag)
  //   if (flag && document.querySelector('#nav-icon2')) {
  //     document.querySelector('#nav-icon2').classList.add('open');
  //   } else if (document.querySelector('#nav-icon2')) {
  //     document.querySelector('#nav-icon2').classList.remove('open');
  //   }

  // } 
  useEffect(() => {
    let menu = pagePath === "/" ? "dashboard" : pagePath.slice(1);
    setActiveMenuId(menu);
  }, [location, pagePath]);

  const onMenuClick = (menu) => {
    setActiveMenuId(menu);
    naviagte(`/${menu}`);
  };
  return (
    <div id="sidebar-menu" className="sideBarMenuContainer">
      {/* {activeMenuId ? ( */}
      <Navbar className="h-100" bg="light" expand="lg" collapseOnSelect>
      <div className="cmpny-header">VIISV GURU <span className="meetMentor">Meet Your Mentor</span></div>
        <Container>
          <Nav>
          
            {/* <div onClick={()=>onToggleHamburger(!toggleHamburger)} id="nav-icon2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
            <div className="nav-div p5">
              <div
                className={
                  activeMenuId === "home"
                    ? "active dash-pad menu-btn d-flex"
                    : "inactive menu-btn d-flex"
                }
              >
                <button
                  className="menu-item menu-btn"
                  onClick={() => {
                    onMenuClick("home");
                  }}
                >
                  Home
                </button>
              </div>
            </div>
            <div className="nav-div p5">
              <div
                className={
                  activeMenuId === "about-us"
                    ? "active dash-pad menu-btn d-flex"
                    : "inactive menu-btn d-flex"
                }
              >
                <button
                  className="menu-item menu-btn"
                  onClick={() => {
                    onMenuClick("about-us");
                  }}
                >
                  About Us
                </button>
              </div>
            </div>
            {/* <div className="nav-div p5">
              <div
                className={
                  activeMenuId === "study_overseas"
                    ? "active dash-pad menu-btn d-flex"
                    : "inactive menu-btn d-flex"
                }
              >
                <button
                  className="menu-item menu-btn"
                  onClick={() => {
                    onMenuClick("study_overseas");
                  }}
                >
                  Study Overseas
                </button> 
                <NavDropdown title=" Study Overseas" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Us</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Canada</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> 
              </div>
            </div> */}
            {/* <div className="nav-div p5">
              <div
                className={
                  activeMenuId === "test_prep"
                    ? "active dash-pad menu-btn d-flex"
                    : "inactive menu-btn d-flex"
                }
              >
                <button
                  className="menu-item menu-btn"
                  onClick={() => {
                    onMenuClick("test_prep");
                  }}
                >
                  Test Prep
                </button>
              </div>
            </div>
            <div className="nav-div p5">
              <div
                className={
                  activeMenuId === "franchise"
                    ? "active dash-pad menu-btn d-flex"
                    : "inactive menu-btn d-flex"
                }
              >
                <button
                  className="menu-item menu-btn"
                  onClick={() => {
                    onMenuClick("franchise");
                  }}
                >
                  Franchise
                </button>
              </div>
            </div> */}
            <div className="nav-div p5">
              <div
                className={
                  activeMenuId === "contact-us"
                    ? "active dash-pad menu-btn d-flex"
                    : "inactive menu-btn d-flex"
                }
              >
                <button
                  className="menu-item menu-btn"
                  onClick={() => {
                    onMenuClick("contact-us");
                  }}
                >
                  Contact us
                </button>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
      {/* // ) : (
      //   <></>
      // )} */}
    </div>
  );
};

export default SideNav;
