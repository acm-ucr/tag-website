import Circles from "@/components/Circles.jsx";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between mb-36">
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
