import img from "/assets/images/hero1.png";
import { Button } from "../../components/ui/button";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Our Community Believes in Importance of LIFE BEYOND WORK
        </h1>
        <p>Join us on this journey of exploration and discovery</p>

        <ScrollLink to="about">
          <div className=" flex flex-row gap-6">
            <Button className="px-6 py-1 bg-[#471853] hover:text-[#e6c0ef] transition-all rounded-full">
              SCROLL DOWN
            </Button>
          </div>
        </ScrollLink>
      </div>

      <div className="relative">
        <img src={img} alt="img" height={500} width={500} />
        <div className=" absolute bg-white px-8 py-2 top-20 right-10 rounded-full">
          <h2 className=" font-semibold text-[#471853]">Art</h2>
        </div>

        <div className=" absolute bg-white px-8 py-2 bottom-12 -left-12 rounded-full">
          <h2 className=" font-semibold text-[#471853]">Diversity</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
