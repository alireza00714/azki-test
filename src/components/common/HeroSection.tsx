const HeroSection = () => {
  return (
    <div className="w-full">
      <span className="bg-yellow-200 left-0 h-[20vh] w-full bottom-0 absolute -z-[1] lg:h-full lg:left-0 lg:top-0 lg:w-3/12 opacity-20" />
      <div className="absolute w-4/6 bottom-[15vh] left-2 lg:w-1/2 lg:bottom-8 lg:left-8">
        <img className="w-full max-h-full" src="/assets/svg/car-green.svg" />
      </div>
    </div>
  );
};

export default HeroSection;
