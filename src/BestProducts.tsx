import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

import dot from "./assets/dot.png";

const BestProducts = () => {
  return (
    <section>
      <div className="flex flex-col xl:flex-row xl:justify-between items-center xl:items-start xl:gap-14">
        {/* img section */}
        <div className="imgSection">
          <h1 className="sectionHeading text-center">Shop our best products</h1>

          <img src={img1} alt="image 1" />
        </div>

        {/* text section */}
        <div className="textSection flex flex-col gap-10">
          <div className="bestProductsGrp">
            <img src={img2} alt="" className="bestProductImg" />

            <div className="bestProductTextGrp">
              <div>
                <h4 className="bestProductGrpHeading">living room</h4>
                <p className="bestProductText">
                  As one of the most-frequented spots in the home a living room
                  sets the tone for the rest of the house.
                </p>
              </div>

              <p className="bestProductReadMore">Read more</p>
            </div>
          </div>

          <div className="bestProductsGrp">
            <img src={img3} alt="" className="bestProductImg" />

            <div className="bestProductTextGrp">
              <div>
                <h4 className="bestProductGrpHeading">bedroom</h4>
                <p className="bestProductText">
                  Unleash your creativity to make not only comfortable but also
                  a pleasant place to start and end your day.
                </p>
              </div>

              <p className="bestProductReadMore">Read more</p>
            </div>
          </div>

          <div className="bestProductsGrp">
            <img src={img4} alt="" className="bestProductImg" />

            <div className="bestProductTextGrp">
              <div>
                <h4 className="bestProductGrpHeading">office</h4>
                <p className="bestProductText">
                  The home office design ideas featured here are maximized for
                  efficiency, optimized for space, and improvised for comfort by
                  Spacejoy designers.
                </p>
              </div>

              <p className="bestProductReadMore">Read more</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row xl:justify-between items-center xl:items-start xl:gap-14  mt-20">
        <div className="textSection">
          <h1 className="sectionSubHeading">
            We help you make Modern Furniture
          </h1>

          <p>
            Begin by researching modern furniture designs and trends. Look for
            inspiration in magazines, online platforms, and design exhibitions.
            Develop a marketing strategy to promote your modern furniture
            collection. Consider selling through your own website, retail
            stores, or online marketplaces. Build partnerships with distributors
            or retailers to expand your reach.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-5 text-start">
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

          <button className=" bg-ehiGreen text-white mt-8">Explore more</button>
        </div>

        <div className="imgSection">
          <img src={img1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
