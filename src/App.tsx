import { useState } from "react";

import HeroSection from "./HeroSection";
import BestProducts from "./BestProducts";
import WhyChooseUs from "./WhyChooseUs";
import Reviews from "./Reviews";
import Blogs from "./Blogs";
import Footer from "./footer";

import userIcon from "./assets/user.svg";
import cartIcon from "./assets/cart.svg";
import logo from "./assets/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="logoGrp">
          <img src={logo} className="h-8" alt="Trendy Trove logo" />
          <h3 className=" text-3xl font-bold">TrendyTrove</h3>
        </div>

        <nav>
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
              <a href="#blog" className="navLink">
                Blog
              </a>
            </li>
            <li className="navText">
              <a href="#contact" className="navLink">
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
      <BestProducts></BestProducts>
      <WhyChooseUs></WhyChooseUs>
      <Reviews></Reviews>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
