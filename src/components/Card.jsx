const Card = ({ name, position }) => {
  return (
    <div className="flex flex-col items-start p-6">
      <div className="bg-gray-100 h-48 w-40 rounded-lg"></div>
      <div className="ml-1 mt-1">
        <p className="text-lg">{position}</p>
        <div className="flex flex-row justify-center items-center">
          <div className="h-5 w-[3px] bg-green-400 m-1" />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
