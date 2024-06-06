import Circles from "@/components/Circles.jsx";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:w-screen h-[700px] md:h-[1200px]">
      <div className="flex h-1/2 mb-30 md:w-1/3 ">
        <Circles />
      </div>

      <div className="flex items-center h-1/2 md:w-1/2 ">
        <Title />
      </div>
    </div>
  );
};

export default Hero;
