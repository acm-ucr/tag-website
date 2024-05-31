import Circles from "@/components/Circles.jsx";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:w-screen h-[700px] lg:h-[1250px] md:h-[700px] sm:flex-col sm:items-center md:items-start lg:items-start">
      <div className="flex h-1/2 md:w-1/2 sm:w-1/2 ">
        <Circles />
      </div>

      <div className="flex items-center h-1/2 md:w-1/2 sm:w-1/2 sm:mt-7 lg:mt-0 md:mt-7 ">
        <Title />
      </div>
    </div>
  );
};

export default Hero;
