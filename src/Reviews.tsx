import profile1 from "./assets/profile1.png";
import profile2 from "./assets/profile2.png";
import profile3 from "./assets/profile3.png";
import stars from "./assets/stars.png";

const Reviews = () => {
  return (
    <div className="reviewSection">
      <h4 className=" text-center xl:text-start font-semibold mb-2">
        Testimonials
      </h4>
      <h1 className="sectionHeading text-center">Our Client reviews</h1>

      <div className="reviewsGrp">
        <div className={`reviewCard bg-[url('./assets/review1.png')]`}>
          <div className="reviewTextBox">
            <img src={profile1} alt="profile image" className="reviewerImg" />

            <div>
              <h3 className="reviewerName">Sarah M.</h3>
              <p className="reviewText">
                "Thrilled with my recent purchase from Trendy Trove the quality
                of the furniture exceeded my expectations, and the delivery
                process was seamless. Will definitely be shopping here again."
              </p>
            </div>

            <img src={stars} alt="ratings" className="reviewStars" />
          </div>
        </div>

        <div className={`reviewCard bg-[url('./assets/review2.png')]`}>
          <div className="reviewTextBox">
            <img src={profile2} alt="profile image" className="reviewerImg" />

            <div>
              <h3 className="reviewerName">Emily R.</h3>
              <p className="reviewText">
                "I was hesitant to buy furniture online, but I'm so glad I took
                the leap withTrendyTrove. The dining set I ordered arrived on
                time."
              </p>
            </div>

            <img src={stars} alt="ratings" className="reviewStars" />
          </div>
        </div>

        <div className={`reviewCard bg-[url('./assets/review3.png')]`}>
          <div className="reviewTextBox">
            <img src={profile3} alt="profile image" className="reviewerImg" />

            <div>
              <h3 className="reviewerName">David S.</h3>
              <p className="reviewText">
                "I recently redecorated my living room with pieces from
                [Furniture Store Name], and I couldn't be happier with the
                results."
              </p>
            </div>

            <img src={stars} alt="ratings" className="reviewStars" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
