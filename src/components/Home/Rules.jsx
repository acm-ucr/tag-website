import GoRules from "./GoRules";
import MahjongRules from "./MahjongRules";

const Rules = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <p className="text-4xl text-tag-green-200 text-center py-4">OUR GAMES</p>
      <GoRules />
      <MahjongRules />
    </div>
  );
};

export default Rules;
