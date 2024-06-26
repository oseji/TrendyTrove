import { motion } from "framer-motion";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import roomWithLights from "./assets/room with lights.png";

import dot from "./assets/dot.png";

type imageVariants = {
  hidden: { opacity: number; scaleY: number };
  visible: {
    opacity: number;
    scaleY: number;
    transition: { duration: number };
  };
};

type thumbnailVariants = {
  hidden: { opacity: number; scale: number; y: number };
  visible: {
    opacity: number;
    scale: number;
    y: number;
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

type bestProductsProps = {
  imageVariants: imageVariants;
  thumbnailVariants: thumbnailVariants;
  textVariantsRight: textVariantsRight;
  textVariantsLeft: textVariantsLeft;
};

const BestProducts = (props: bestProductsProps) => {
  return (
    <section id="product">
      <div className="flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-14">
        {/* img section */}
        <div className="imgSection">
          <h1 className="sectionHeading">Shop our best products</h1>

          <motion.img
            variants={props.imageVariants}
            initial={props.imageVariants.hidden}
            whileInView={props.imageVariants.visible}
            className="rounded-xl"
            src={roomWithLights}
            alt="image 1"
          />
        </div>

        {/* text section */}
        <div className="textSection flex flex-col gap-10">
          <div className="bestProductsGrp">
            <motion.img
              variants={props.thumbnailVariants}
              initial={props.thumbnailVariants.hidden}
              whileInView={props.thumbnailVariants.visible}
              src={img2}
              alt="best product image"
              className="bestProductImg"
            />

            <motion.div
              variants={props.textVariantsRight}
              initial={props.textVariantsRight.hidden}
              whileInView={props.textVariantsRight.visible}
              className="bestProductTextGrp"
            >
              <div>
                <h4 className="bestProductGrpHeading">living room</h4>
                <p className="bestProductText">
                  As one of the most-frequented spots in the home a living room
                  sets the tone for the rest of the house.
                </p>
              </div>

              <p className="bestProductReadMore">Read more</p>
            </motion.div>
          </div>

          <div className="bestProductsGrp">
            <motion.img
              variants={props.thumbnailVariants}
              initial={props.thumbnailVariants.hidden}
              whileInView={props.thumbnailVariants.visible}
              src={img3}
              alt="best product image"
              className="bestProductImg"
            />

            <motion.div
              variants={props.textVariantsRight}
              initial={props.textVariantsRight.hidden}
              whileInView={props.textVariantsRight.visible}
              className="bestProductTextGrp"
            >
              <div>
                <h4 className="bestProductGrpHeading">bedroom</h4>
                <p className="bestProductText">
                  Unleash your creativity to make not only comfortable but also
                  a pleasant place to start and end your day.
                </p>
              </div>

              <p className="bestProductReadMore">Read more</p>
            </motion.div>
          </div>

          <div className="bestProductsGrp">
            <motion.img
              variants={props.thumbnailVariants}
              initial={props.thumbnailVariants.hidden}
              whileInView={props.thumbnailVariants.visible}
              src={img4}
              alt="best product image"
              className="bestProductImg"
            />

            <motion.div
              variants={props.textVariantsRight}
              initial={props.textVariantsRight.hidden}
              whileInView={props.textVariantsRight.visible}
              className="bestProductTextGrp"
            >
              <div>
                <h4 className="bestProductGrpHeading">office</h4>
                <p className="bestProductText">
                  The home office design ideas featured here are maximized for
                  efficiency, optimized for space, and improvised for comfort by
                  Spacejoy designers.
                </p>
              </div>

              <p className="bestProductReadMore">Read more</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-14  mt-20"
        id="services"
      >
        <motion.div
          variants={props.textVariantsLeft}
          initial={props.textVariantsLeft.hidden}
          whileInView={props.textVariantsLeft.visible}
          className="textSection"
        >
          <h1 className="sectionSubHeading">
            We help you make Modern Furniture
          </h1>

          <p className="md:text-center xl:text-start">
            Begin by researching modern furniture designs and trends. Look for
            inspiration in magazines, online platforms, and design exhibitions.
            Develop a marketing strategy to promote your modern furniture
            collection. Consider selling through your own website, retail
            stores, or online marketplaces. Build partnerships with distributors
            or retailers to expand your reach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 text-start">
            <div className="pointsGrp">
              <img src={dot} alt="dot" className="dot" />
              <p className="point">Testing and Evaluation</p>
            </div>
            <div className="pointsGrp">
              <img src={dot} alt="dot" className="dot" />
              <p className="point">Research and Inspiration</p>
            </div>
            <div className="pointsGrp">
              <img src={dot} alt="dot" className="dot" />
              <p className="point">Marketing and Distribution</p>
            </div>
            <div className="pointsGrp">
              <img src={dot} alt="dot" className="dot" />
              <p className="point">Sketching and Rendering</p>
            </div>
          </div>

          <button className=" bg-ehiGreen text-white mt-8 block md:mx-auto xl:mx-0">
            Explore more
          </button>
        </motion.div>

        <div className="imgSection">
          <motion.img
            variants={props.imageVariants}
            initial={props.imageVariants.hidden}
            whileInView={props.imageVariants.visible}
            src={img1}
            alt="big image"
          />
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
