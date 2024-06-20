import { useState } from "react";
import userIcon from "./assets/user.svg";
import cartIcon from "./assets/cart.svg";
import logo from "./assets/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="logoGrp">
          <img src={logo} alt="Trendy Trove logo" />
          <h3>TrendyTrove</h3>
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
        </nav>

        <div className="headerIconGrp">
          <img src={userIcon} alt="user icon" className="headerIcon" />
          <img src={cartIcon} alt="cart icon" className="headerIcon" />
        </div>
      </header>

      {/* hero section */}
      <section className="heroSection">
        <h1 className="heroMainText">
          Where Comfort Meets Style, Every Room Finds Its Smile.
        </h1>

        <p className="heroSubText">
          From timeless classics to modern marvels, we offer pieces that
          transform houses into homes. Whether you're furnishing a cozy nook or
          designing a grand living space, we're here to elevate your interior
          journey. Enjoy browsing and discovering pieces that inspire your
          unique style!
        </p>

        <div className="flex flex-row items-center justify-center gap-5">
          <button className="bg-ehiGreen">Learn more</button>
          <button className=" bg-transparent border border-white">
            About us
          </button>
        </div>
      </section>

      {/* shop our best products */}
      <section className=" flex flex-col xl:flex-row xl:justify-between items-center">
        {/* img section */}
        <div className="imgSection"></div>

        {/* text section */}
        <div className="textSection"></div>
      </section>
    </div>
  );
}

export default App;
