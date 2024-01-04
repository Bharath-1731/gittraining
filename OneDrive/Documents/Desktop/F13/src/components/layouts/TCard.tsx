import { FC } from "react";

interface TCardProps {
  img: string;
  title: string;
}

const TCard: FC<TCardProps> = (props) => {
  return (
    <div className=" w-full lg:w-1/4 bg-[#2c292c] p-3 rounded-lg">
      <img
        className=" rounded-lg items-center justify-center"
        src={props.img}
        alt="img"
      />
      <div className=" flex flex-col items-center mt-5 gap-3">
        <h2 className=" font-semibold text-xl">{props.title}</h2>
      </div>
    </div>
  );
};

export default TCard;
