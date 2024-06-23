import { motion } from "framer-motion";

import img5 from "./assets/img5.png";
import dots from "./assets/why choose us dots.png";
import bus from "./assets/bus.png";
import shopping from "./assets/shopping.png";
import support from "./assets/support.png";
import returns from "./assets/returns.png";

type imageVariants = {
  hidden: { opacity: number; height: number };
  visible: {
    opacity: number;
    height: string;
    transition: { duration: number };
  };
};

type textVariantsRight = {
  hidden: { opacity: number; x: number };
  visible: {
    opacity: number;
    x: number;
    transition: { duration: number };
  };
};

type textVariantsLeft = {
  hidden: { opacity: number; x: number };
  visible: {
    opacity: number;
    x: number;
    transition: { duration: number };
  };
};

type whyChooseUsProps = {
  imageVariants: imageVariants;
  textVariantsRight: textVariantsRight;
  textVariantsLeft: textVariantsLeft;
};

const WhyChooseUs = (props: whyChooseUsProps) => {
  return (
    <section className="flex flex-col xl:flex-row xl:justify-between items-center xl:items-start  gap-14 xl:gap-28">
      <div className="textSection">
        <h1 className="sectionSubHeading">why choose us</h1>

        <p>
          Choosing us for your furniture needs means choosing quality,
          reliability, and exceptional service. Here's why you should choose us:
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <motion.div
            variants={props.textVariantsLeft}
            initial={props.textVariantsLeft.hidden}
            whileInView={props.textVariantsLeft.visible}
            className="whyChooseUsGrp"
          >
            <img src={bus} alt="bus icon" className="whyChooseUsImg" />

            <h4 className="whyChooseUsHeading">Fast & Free Shipping </h4>

            <p className="whyChooseUsText">
              Our dedicated team is committed to providing exceptional customer
              service every step of the way, from browsing our website.
            </p>
          </motion.div>

          <motion.div
            variants={props.textVariantsRight}
            initial={props.textVariantsRight.hidden}
            whileInView={props.textVariantsRight.visible}
            className="whyChooseUsGrp"
          >
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
          </motion.div>

          <motion.div
            variants={props.textVariantsLeft}
            initial={props.textVariantsLeft.hidden}
            whileInView={props.textVariantsLeft.visible}
            className="whyChooseUsGrp"
          >
            <img src={support} alt="support icon" className="whyChooseUsImg" />

            <h4 className="whyChooseUsHeading">24/7 Support</h4>

            <p className="whyChooseUsText">
              Your satisfaction is our top priority. If you're not completely
              satisfied with your purchase, we'll work with you to make it
              right.
            </p>
          </motion.div>

          <motion.div
            variants={props.textVariantsRight}
            initial={props.textVariantsRight.hidden}
            whileInView={props.textVariantsRight.visible}
            className="whyChooseUsGrp"
          >
            <img src={returns} alt="returns icon" className="whyChooseUsImg" />

            <h4 className="whyChooseUsHeading">Hassle Free Returns</h4>

            <p className="whyChooseUsText">
              With our user-friendly website, you can easily browse our
              products, compare options, and make purchases from the comfort of
              your own home.
            </p>
          </motion.div>
        </div>

        <button className=" bg-ehiGreen text-white mt-5 text-sm">
          Find out more
        </button>
      </div>

      <div className="imgSection relative">
        <motion.img
          variants={props.imageVariants}
          initial={props.imageVariants.hidden}
          whileInView={props.imageVariants.visible}
          className="hidden xl:block"
          src={dots}
          alt="dots"
        />
        <motion.img
          variants={props.imageVariants}
          initial={props.imageVariants.hidden}
          whileInView={props.imageVariants.visible}
          src={img5}
          className=" xl:w-10/12 xl:ml-auto xl:absolute xl:top-20 xl:left-24"
          alt="big image"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
