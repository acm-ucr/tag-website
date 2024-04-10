import Circles from "@/components/Circles.jsx";
import Title from "@/components/Title.jsx";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between w-screen h-[600px]">
      <div className="flex flex-row w-3/5">
        <Circles />
      </div>

      <div className="flex items-center w-2/5">
        <Title />
      </div>
    </div>
  );
};

export default Hero;
