import Circles from "@/components/Home/Circles.jsx";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
      <Circles />

      <div className="flex items-center h-1/2 w-3/5 sm:w-1/2">
        <Title />
      </div>
    </div>
  );
};

export default Hero;
