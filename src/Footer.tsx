import emailIcon from "./assets/email.svg";
import plane from "./assets/plane.svg";
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import linkdn from "./assets/linkdn.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="flex flex-row items-center gap-3">
        <img src={emailIcon} alt="email icon" />
        <p className=" font-semibold">Subscribe to newsletter</p>
      </div>

      <form className="inputGrp">
        <div className=" flex flex-col gap-2">
          <label htmlFor="name">Name: </label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className=" flex flex-col gap-2">
          <label htmlFor="email">Email: </label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <button
          className=" border border-black rounded-md w-fit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img src={plane} alt="send icon" className="h-5" />
        </button>
      </form>

      <div className="w-full xl:w-auto flex flex-row  items-center gap-5 my-10">
        <img src={logo} className="h-8" alt="Trendy Trove logo" />
        <h3 className=" text-2xl font-bold">TrendyTrove</h3>
      </div>

      <div className="footerTextGrp">
        <p className=" xl:w-96">
          At TrendyTrove, we believe that furniture should not only be
          functional but also reflect your unique style and personality. That's
          why we curate a wide selection of modern and classic furniture designs
          to suit every taste and budget.
        </p>

        <div className="footerColGrp">
          <div className="footerCol">
            <p>about us</p>
            <p>services</p>
            <p>blog</p>
            <p>contact us</p>
          </div>

          <div className="footerCol">
            <p>support</p>
            <p>knowledge base</p>
            <p>live chat</p>
          </div>

          <div className="footerCol">
            <p>jobs</p>
            <p>our team</p>
            <p>leadership</p>
            <p>privacy policy</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-row items-center gap-4 mt-8">
        <img src={facebook} alt="facebook icon" className="footerIcon" />
        <img src={instagram} alt="instagram icon" className="footerIcon" />
        <img src={twitter} alt="twitter icon" className="footerIcon" />
        <img src={linkdn} alt="linkdn icon" className="footerIcon" />
      </div>

      <div className=" border-t border-black p-3 mt-3 flex flex-col xl:flex-row justify-between gap-2 xl:gap-0 items-center">
        <p className=" text-center">
          Copyright 2024 Blessingokojie62@gmail.com. All Rights Reserved.
        </p>

        <div className=" flex flex-row items-center gap-5"></div>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
