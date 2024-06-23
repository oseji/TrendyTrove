import { useEffect, useRef, useState } from "react";

import HeroSection from "./HeroSection";
import BestProducts from "./BestProducts";
import WhyChooseUs from "./WhyChooseUs";
import Reviews from "./Reviews";
import Blogs from "./Blogs";
import Footer from "./Footer";

import userIcon from "./assets/user.svg";
import cartIcon from "./assets/cart.svg";
import logo from "./assets/logo.png";

import menu from "./assets/menu.svg";
import close from "./assets/close.svg";

function App() {
  const imageVariants = {
    hidden: { opacity: 0.8, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.8 } },
  };

  const thumbnailVariants = {
    hidden: { opacity: 0.5, scale: 0.5, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  const blogVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 110 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariantsRight = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const textVariantsLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const [showNav, setShowNav] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const [menuToggled, setMenuToggled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setMenuToggled(!menuToggled);

    const nav = navRef.current;
    nav?.classList.toggle("hideNav");
  };

  const handleNavBarScroll = () => {
    window.scrollY > lastScrollY ? setShowNav(false) : setShowNav(true);

    setLastScrollY(window.scrollY);
  };

  //handling sticky navbar
  useEffect(() => {
    window.addEventListener("scroll", handleNavBarScroll);
  }, [lastScrollY]);

  return (
    <div className="App">
      <header className={`${showNav ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="logoGrp z-20">
          <div className=" flex flex-row items-center gap-5 z-20">
            <img src={logo} className="xl:h-8 h-5" alt="Trendy Trove logo" />
            <h3 className=" text-xl md:text-2xl xl:text-3xl font-bold ">
              TrendyTrove
            </h3>
          </div>

          <img
            src={menuToggled ? close : menu}
            alt="menu icon"
            className=" xl:hidden h-7 z-20"
            onClick={toggleMenu}
          />
        </div>

        <nav ref={navRef} className="hideNav">
          <ul className="navList">
            <li className="navText">
              <a href="#home" className="navLink">
                Home
              </a>
            </li>
            <li className="navText">
              <a href="#product" className="navLink">
                Product
              </a>
            </li>
            <li className="navText">
              <a href="#services" className="navLink">
                Services
              </a>
            </li>
            <li className="navText">
              <a href="#Blogs" className="navLink">
                Blog
              </a>
            </li>
            <li className="navText">
              <a href="#footer" className="navLink">
                Contact us
              </a>
            </li>
          </ul>

          <div className="headerIconGrp">
            <img src={userIcon} alt="user icon" className="headerIcon" />
            <img src={cartIcon} alt="cart icon" className="headerIcon" />
          </div>
        </nav>
      </header>

      <HeroSection></HeroSection>
      <BestProducts
        imageVariants={imageVariants}
        thumbnailVariants={thumbnailVariants}
        textVariantsRight={textVariantsRight}
        textVariantsLeft={textVariantsLeft}
      ></BestProducts>
      <WhyChooseUs
        imageVariants={imageVariants}
        textVariantsRight={textVariantsRight}
        textVariantsLeft={textVariantsLeft}
      ></WhyChooseUs>
      <Reviews></Reviews>
      <Blogs blogVariants={blogVariants}></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
