import img1 from "/assets/images/f1.jpg";
import img2 from "/assets/images/f2.jpg";
import img3 from "/assets/images/f3.jpg";
import img4 from "/assets/images/f4.jpg";

import Card from "../layouts/Card";

const Features = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Features
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <Card img={img1} title="SignUp" />
        <Card img={img2} title="Dashboard" />
        <Card img={img3} title="Chat" />
        <Card img={img4} title="Post" />
      </div>
    </div>
  );
};

export default Features;
