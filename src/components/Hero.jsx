import Circles from "@/components/Circles.jsx";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between w-screen h-[600px]">
      <div className="flex flex-row w-1/2">
        <Circles />
      </div>

      <div className="flex items-center w-1/2">
        <Title />
      </div>
    </div>
  );
};

export default Hero;
