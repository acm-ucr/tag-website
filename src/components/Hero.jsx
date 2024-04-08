import Circles from "@/components/Circles.jsx";
import Title from "@/components/Title.jsx";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between w-screen">
      <div className="flex flex-row">
        <Circles />
      </div>

      <div className="mr-80 flex items-center">
        <Title />
      </div>
    </div>
  );
};

export default Hero;
