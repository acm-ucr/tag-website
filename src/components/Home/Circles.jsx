const Circles = () => {
  return (
    <div className="my-5 relative h-[45vw] w-[52vw] max-h-45vw max-w-52vw">
      <div className="h-[25vw] w-[25vw] max-h-[25vw] max-w-[25vw] p-[1vw] rounded-[50%] border-2 border-tag-green-200 absolute top-0 right-0 flex justify-center items-center">
        <div className="rounded-[50%] bg-[url('/assets/Go.webp')] bg-cover relative h-[95%] w-[95%]" />
      </div>
      <div className="h-[25vw] w-[25vw] max-h-[25vw] max-w-[25vw] rounded-[50%] bg-[url('/Mahjong.webp')] bg-cover absolute left-0 top-0 translate-y-[30%]" />
      <div className="h-[25vw] w-[25vw] max-h-[25vw] max-w-[25vw] rounded-[50%] bg-[url('/assets/Tea.webp')] bg-cover absolute bottom-0 translate-x-[65%]" />
    </div>
  );
};

export default Circles;
