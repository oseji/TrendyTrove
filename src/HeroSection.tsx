import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="heroSection" id="home">
      <div>
        <TypeAnimation
          sequence={[
            "Where Comfort Meets Style",
            2000,
            "Where Comfort Meets Style, Every Room Finds Its Smile.",
            1000,
          ]}
          className="heroMainText"
          cursor={false}
          wrapper="h1"
          speed={10}
          repeat={0}
        />

        <p className="heroSubText">
          From timeless classics to modern marvels, we offer pieces that
          transform houses into homes. Whether you're furnishing a cozy nook or
          designing a grand living space, we're here to elevate your interior
          journey. Enjoy browsing and discovering pieces that inspire your
          unique style!
        </p>

        <div className="flex flex-row items-center justify-center gap-5 mt-20 xl:mt-12">
          <button className="bg-ehiGreen text-white">Learn more</button>
          <button className=" bg-transparent border border-white">
            About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
