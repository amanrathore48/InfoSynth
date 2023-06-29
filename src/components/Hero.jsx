const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col text-center">
      <h1 className="sm:text-6xl text-5xl mt-5 font-extrabold leading-[1.15] text-black">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient font-bold font-pop">InfoSynth.AI</span>
        <p className="text-sm mt-4 font-pop font-light orange_gradient">
          Powered by OpenAI GPT-4
        </p>
      </h1>
      <h2 className="desc">
        Simplify your reading with InfoSynth, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
