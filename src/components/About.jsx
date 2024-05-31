const About = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="border-[1px] w-4/5 h-[300px] border-tag-green-100 rounded-[500px] flex justify-center items-center">
        <div className="bg-[url('/Mahjong.webp')] bg-cover w-[95%] lg:h-[87%] h-[91%] rounded-[500px] flex flex-col justify-center items-center text-white">
          <div className="from-tag-green-200/80 to-black/80 bg-gradient-to-l -[url('/Mahjong.webp')]- bg-cover w-[100%] h-[100%] rounded-[500px] flex flex-col justify-center items-center text-white">
            <p className="lg:text-3xl md:text-2xl sm:text-xl my-3">
              ABOUT TEA & GO
            </p>
            <p className="my-5 lg:text-xl md:text-lg sm:text-md text-center w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
