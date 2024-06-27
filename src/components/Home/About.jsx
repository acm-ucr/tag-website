const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 h-[300px] flex justify-center items-center border-[1px] border-tag-green-100 rounded-full">
        <div className="bg-[url('/Mahjong.webp')] bg-cover w-[95%] lg:h-[87%] h-[91%] rounded-[500px] flex flex-col justify-center items-center text-white">
          <div className="w-full h-full flex flex-col justify-center items-center text-white from-tag-green-200/80 to-black/80 bg-gradient-to-l -[url('/Mahjong.webp')]- bg-cover rounded-full ">
            <p className="lg:text-3xl md:text-2xl sm:text-xl my-3">
              ABOUT TEA & GO
            </p>
            <p className="my-5 lg:text-xl md:text-lg sm:text-md text-center w-4/5">
              Tea and Go meets weekly to enjoy traditional Chinese board games
              and savor traditional teas. Join us for a blend of strategic
              gameplay and cultural tea experiences in a friendly, social
              atmosphere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
