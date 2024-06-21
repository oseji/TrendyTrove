const HeroSection = () => {
  return (
    <section className="heroSection" id="home">
      <h1 className="heroMainText">
        Where Comfort Meets Style, Every Room Finds Its Smile.
      </h1>

      <p className="heroSubText">
        From timeless classics to modern marvels, we offer pieces that transform
        houses into homes. Whether you're furnishing a cozy nook or designing a
        grand living space, we're here to elevate your interior journey. Enjoy
        browsing and discovering pieces that inspire your unique style!
      </p>

      <div className="flex flex-row items-center justify-center gap-5 mt-12">
        <button className="bg-ehiGreen text-white">Learn more</button>
        <button className=" bg-transparent border border-white">
          About us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
