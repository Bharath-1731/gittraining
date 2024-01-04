import { FC } from "react";

interface CardProps {
    img: string,
    title: string,
}

const Card: FC<CardProps> = (props) => {
  return (
    <div className=" w-full lg:w-1/4 bg-[#2c292c] p-3 rounded-lg">
      <div>
        <img className=" rounded-xl" src={props.img} alt="img" />
      </div>
      <div className=" p-2 mt-5">
        <div className=" flex flex-row justify-between">
          <h3 className=" font-semibold text-xl">{props.title}</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Card;