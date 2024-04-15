const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="border-[1px] w-4/5 h-[300px] border-tag-green-300 rounded-[500px] flex justify-center items-center">
        <div className="bg-[url('/Mahjong.webp')] bg-cover w-[95%] h-[87%] rounded-[500px] flex flex-col justify-center items-center text-white">
          <p className="text-4xl my-5">ABOUT TEA & GO</p>
          <p className="my-5 text-2xl text-center w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
