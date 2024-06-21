import img1 from "./assets/img1.png";
import bus from "./assets/bus.png";
import shopping from "./assets/shopping.png";
import support from "./assets/support.png";
import returns from "./assets/returns.png";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-14">
      <div className="textSection">
        <h1 className="sectionSubHeading">why choose us</h1>

        <p>
          Choosing us for your furniture needs means choosing quality,
          reliability, and exceptional service. Here's why you should choose us:
        </p>

        <div className=" grid grid-cols-2 gap-10 mt-10">
          <div className="whyChooseUsGrp">
            <img src={bus} alt="bus icon" className="whyChooseUsImg" />

            <h4 className="whyChooseUsHeading">Fast & Free Shipping </h4>

            <p className="whyChooseUsText">
              Our dedicated team is committed to providing exceptional customer
              service every step of the way, from browsing our website.
            </p>
          </div>

          <div className="whyChooseUsGrp">
            <img
              src={shopping}
              alt="shopping icon"
              className="whyChooseUsImg"
            />

            <h4 className="whyChooseUsHeading">Easy to Shop </h4>

            <p className="whyChooseUsText">
              We offer high-quality furniture crafted from premium materials to
              ensure durability and longevity.
            </p>
          </div>

          <div className="whyChooseUsGrp">
            <img src={support} alt="support icon" className="whyChooseUsImg" />

            <h4 className="whyChooseUsHeading">24/7 Support</h4>

            <p className="whyChooseUsText">
              Your satisfaction is our top priority. If you're not completely
              satisfied with your purchase, we'll work with you to make it
              right.
            </p>
          </div>

          <div className="whyChooseUsGrp">
            <img src={returns} alt="returns icon" className="whyChooseUsImg" />

            <h4 className="whyChooseUsHeading">Hassle Free Returns</h4>

            <p className="whyChooseUsText">
              With our user-friendly website, you can easily browse our
              products, compare options, and make purchases from the comfort of
              your own home.
            </p>
          </div>
        </div>
      </div>

      <div className="imgSection">
        <img src={img1} alt="" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
