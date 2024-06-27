import Circles from "@/components/Home/Circles.jsx";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between mt-2 mb-24">
      <div className="flex h-1/2 w-1/2">
        <Circles />
      </div>

      <div className="flex items-center h-1/2 w-1/2">
        <Title />
      </div>
    </div>
  );
};

export default Hero;
