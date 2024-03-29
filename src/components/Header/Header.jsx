import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandle from "react-outside-click-handler";
import { Link } from "react-scroll";
import LoginModal from "../loginModal/loginModal";
// import { useDispatch, useSelector } from "react-redux";
// import { login, selectUser } from "../../Store/userSlice";

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpened && "-100%",
      };
    }
  };

  // const handleLogin = (name) => {
  //   // dispatch(login({ name }));
  // };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandle
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="residencies" spy={true} smooth={true} duration={500}>
              Residencies
            </Link>

            <Link to="ourvalue" spy={true} smooth={true} duration={500}>
              Our Value
            </Link>

            <Link to="contactus" spy={true} smooth={true} duration={500}>
              Contact Us
            </Link>

            <Link
              to="getstarted"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Get Started
            </Link>
            {/* {user.loggedIn ? (
              <span>{user.name}</span>
            ) : ( */}
              <button className="button" onClick={openModal}>
                Login
              </button>
            {/* )}*/}

            {/* modal login */}
            <LoginModal isOpen={modalIsOpen} onClose={closeModal} />
          </div>
        </OutsideClickHandle>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
