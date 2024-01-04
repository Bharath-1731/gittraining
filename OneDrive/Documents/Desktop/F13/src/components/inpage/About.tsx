import img from "/assets/images/about.jpg";
import { Button } from "../../components/ui/button";
import {Link as RouteLink} from 'react-router-dom'

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            What Makes Us Special?
          </h2>
          <p>
          F13 helps companies make better, more informed decisions based on insights from the outside. 
          We believe that business strategy will be increasingly shaped by insights from online data. 
          Organizations will look outside, beyond their internal reporting systems to a world of data that is constantly growing and changing. 
          Our customers use these insights to make timely decisions based on real-time analysis.
          </p>
          <p>
          Our work at F13 Technologies highlights our commitment to capturing more innovation than anyone else in the industry, providing more ways
          to help customers transform data into actionable insights, and improving the overall user experience. We believe paid, owned and earned
          data doesn't work in isolation, and nor should teams. As the tech landscape continues to converge, so do our solutions.
          </p>

          <RouteLink to="https://in.linkedin.com/showcase/f13-hobbies" target="_blank">
          <div className=" flex flex-row gap-6">
            <Button className="px-6 py-1 bg-[#471853] hover:text-[#e6c0ef] transition-all rounded-full">
              Learn More
            </Button>
          </div>
        </RouteLink>
        </div>
      </div>
    </div>
  );
};

export default About;