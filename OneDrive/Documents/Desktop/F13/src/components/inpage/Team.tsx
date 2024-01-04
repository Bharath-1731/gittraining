import img1 from "/assets/images/t1.jpeg";
import img2 from "/assets/images/t2.jpeg";
import img3 from "/assets/images/t3.jpeg";
import img4 from "/assets/images/t4.jpeg";
import TCard from "../layouts/TCard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Our Team
      </h1>
        <p className=" w-full p-4 space-y-1">
          Meet our dedicated team of four, each bringing a unique set of skills
          and perspectives to the table. Rooted in a collective commitment to
          excellence, we thrive on collaboration and creativity. From coding
          wizards to design virtuosos, we seamlessly blend our expertise to
          tackle projects with precision and ingenuity.
        </p>
        <p className=" w-full p-4 space-y-1">
          Our synergy extends beyond the workspace, fostering a supportive and
          dynamic environment. With a shared passion for turning challenges into
          opportunities, we embark on a journey to transform ideas into
          impactful realities. Join us as we navigate the realms of innovation,
          guided by a collective vision of success
        </p>
      <div className=" flex flex-col lg:flex-row gap-12 justify-center">
        <TCard img={img1} title="Dushyant" />
        <TCard img={img2} title="Hritik" />
        <TCard img={img3} title="Prathamesh" />
        <TCard img={img4} title="Bharath" />
      </div>
    </div>
  );
};

export default Product;
