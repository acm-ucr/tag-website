import "./index.css";

const CustomHeader = ({ label }) => {
  return (
    <div className="flex justify-center text-white bg-game-black text-lg px-2 py-1">
      {label}
    </div>
  );
};

export default CustomHeader;
