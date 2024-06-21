import blog1 from "./assets/blog1.png";
import blog2 from "./assets/blog2.png";
import blog3 from "./assets/blog3.png";

const Blogs = () => {
  return (
    <div id="Blogs">
      <div className="flex flex-row justify-between items-center">
        <h2 className="sectionSubHeading text-ehiGreen">Recent blogs</h2>
        <p className=" text-ehiGreen underline hover:scale-110 transition ease-in-out duration-150 cursor-pointer">
          View all posts
        </p>
      </div>

      <div className="blogGrp">
        <div className="blogCard">
          <img src={blog1} alt="blog image" className="blogImg" />

          <h3 className="blogTitle">First Time Home Owner Ideas</h3>
          <p className="blogDetails">
            by <span className=" font-semibold">John Peter</span> on
            <span className=" font-semibold"> Nov 18th, 2024</span>
          </p>
        </div>

        <div className="blogCard">
          <img src={blog2} alt="blog image" className="blogImg" />

          <h3 className="blogTitle">First Time Home Owner Ideas</h3>
          <p className="blogDetails">
            by <span className=" font-semibold">John Peter</span> on
            <span className=" font-semibold"> Nov 18th, 2024</span>
          </p>
        </div>

        <div className="blogCard">
          <img src={blog3} alt="blog image" className="blogImg" />

          <h3 className="blogTitle">First Time Home Owner Ideas</h3>
          <p className="blogDetails">
            by <span className=" font-semibold">John Peter</span> on
            <span className=" font-semibold"> Nov 18th, 2024</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
