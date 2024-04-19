import Circles from "@/components/Circles.jsx";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between w-screen h-[600px]">
      <div className="flex flex-row w-3/5">
        <Circles />
      </div>

      <div className="flex items-center w-2/5"></div>
    </div>
  );
};

export default Hero;
