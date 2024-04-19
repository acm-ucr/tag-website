const Gallery = () => {
  return (
    <div className="h-full flex flex-col my-3 items-center justify-around">
      <button className="bg-gray-300 h-16 w-2/5 mb-5 rounded-lg">
        <p className="text-4xl">Event 5</p>
      </button>

      <button className="bg-gray-300 h-16 w-2/5 mb-5 rounded-lg">
        <p className="text-4xl">Event 4</p>
      </button>

      <button className="bg-gray-300 h-16 w-2/5 mb-5 rounded-lg">
        <p className="text-4xl">Event 3</p>
      </button>

      <button className="bg-gray-300 h-16 w-2/5 mb-5 rounded-lg">
        <p className="text-4xl">Event 2</p>
      </button>

      <button className="bg-gray-300 h-16 w-2/5 mb-5 rounded-lg">
        <p className="text-4xl">Event 1</p>
      </button>
    </div>
  );
};

export default Gallery;
