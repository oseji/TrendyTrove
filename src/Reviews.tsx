import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile1 from "./assets/profile1.png";
import prevIcon from "./assets/prev.svg";
import nextIcon from "./assets/next.svg";

import stars from "./assets/stars.png";

const Reviews = () => {
  type reviewsType = { id: number; name: string; text: string };

  const reviews: reviewsType[] = [
    {
      id: 1,
      name: "Sarah M.",
      text: "Thrilled with my recent purchase from Trendy Trove the quality of the furniture exceeded my expectations, and the delivery process was seamless. Will definitely be shopping here again.",
    },
    {
      id: 2,
      name: "Emily R.",
      text: "I was hesitant to buy furniture online, but I'm so glad I took the leap withTrendyTrove. The dining set I ordered arrived on time.",
    },
    {
      id: 3,
      name: "David S.",
      text: "I recently redecorated my living room with pieces from Trendy Trove and I couldn't be happier with the results.",
    },
    {
      id: 4,
      name: "Michael K.",
      text: "The customer service at Trendy Trove is top-notch. They helped me find the perfect sofa for my home and the delivery was prompt.",
    },
    {
      id: 5,
      name: "Jessica T.",
      text: "I love my new bed frame from Trendy Trove! It's sturdy, stylish, and was very easy to assemble. Highly recommend!",
    },
    {
      id: 6,
      name: "Mark L.",
      text: "Trendy Trove has a fantastic selection of modern furniture. I bought a coffee table and it looks great in my living room.",
    },
    {
      id: 7,
      name: "Laura P.",
      text: "I ordered a bookshelf from Trendy Trove and it arrived in perfect condition. The quality is excellent and it was easy to put together.",
    },
    {
      id: 8,
      name: "James B.",
      text: "The prices at Trendy Trove are very reasonable for the quality you get. I bought a dining table set and it's absolutely beautiful.",
    },
    {
      id: 9,
      name: "Olivia C.",
      text: "I'm very impressed with Trendy Trove. The delivery was quick and the furniture pieces I ordered are just as described on the website.",
    },
    {
      id: 10,
      name: "Daniel W.",
      text: "Trendy Trove made my online furniture shopping experience very enjoyable. The website is user-friendly and the delivery service was excellent.",
    },
  ];

  const [reviewsPerPage, setReviewsPerPage] = useState<number>(() => {
    let num = 0;
    if (window.innerWidth >= 1280) {
      num = 3;
    }
    if (window.innerWidth < 1280) {
      num = 2;
    }
    if (window.innerWidth < 750) {
      num = 1;
    }

    return num;
  });
  const numOfPages = Math.ceil(reviews.length / reviewsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = currentPage * reviewsPerPage;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (endIndex < reviews.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    console.log(setReviewsPerPage);
  }, []);

  return (
    <div className="reviewSection">
      <h4 className=" text-center xl:text-start font-semibold mb-2">
        Testimonials
      </h4>
      <h1 className="sectionHeading text-center">Our Client reviews</h1>

      <div className="reviewsGrp">
        <button
          className={`reviewBtn`}
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <img src={prevIcon} className="reviewBtnIcon" alt="previous icon" />
        </button>

        <div className=" flex flex-row items-center gap-10">
          {reviews.slice(startIndex, endIndex).map((element, index) => (
            <motion.div
              initial={{ opacity: 0.8, scale: 0.6 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }}
              className={`reviewCard`}
              key={index}
            >
              <div className="reviewTextBox">
                <img
                  src={profile1}
                  alt="profile image"
                  className="reviewerImg"
                />

                <div>
                  <h3 className="reviewerName">{element.name}</h3>
                  <p className="reviewText">{element.text}</p>
                </div>

                <img src={stars} alt="ratings" className="reviewStars" />
              </div>
            </motion.div>
          ))}
        </div>

        <button
          className={`reviewBtn left-[85%] md:left-0 `}
          onClick={handleNext}
          disabled={currentPage === numOfPages}
        >
          <img src={nextIcon} className="reviewBtnIcon" alt="next icon" />
        </button>
      </div>

      <div className="pagesGrp">
        {Array.from({ length: numOfPages }, (_, index) => (
          <div
            className={`pageIcon ${
              index + 1 === currentPage
                ? "bg-ehiGreen scale-150"
                : "bg-slate-400"
            }`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
