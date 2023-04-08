const SpotlightCards = () => {
  //   const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  //   const handleMouseMove = (e) => {
  //     const rect = e.currentTarget.getBoundingClientRect();
  //     const mouseLeft = e.clientX - rect.left;
  //     const mouseTop = e.clientY - rect.top;
  //     setMousePosition({ left: mouseLeft, top: mouseTop });
  //     console.log(mousePosition);
  //   };

  //   const radialGradientStyle = {
  //     maskImage: "radial-gradient(farthest-side at top, #fff, transparent)",
  //     WebkitMaskImage: `radial-gradient(180px at ${mousePosition.left} ${mousePosition.top}, #fff, transparent)`,
  //   };

  const getMouseXYOffset = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const XOffset = e.clientX - rect.left;
    const YOffset = e.clientY - rect.top;
    return {
      left: XOffset,
      top: YOffset,
    };
  };

  return (
    <div className="border-zinc-900/5 mt-4 grid grid-cols-1 gap-8 border-t pt-10">
      <div
        className="_card bg-zinc-50 hover:shadow-zinc-900/5 group relative flex rounded-xl transition-shadow hover:shadow-md"
        // onMouseMove={(e) => handleMouseMove(e)}
      >
        <div className="pointer-events-none">
          <div className="_effect_one radial-gradient-mask absolute inset-0 rounded-xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"></div>

          {/* TODO: use mouseposition to change radial gradient  */}
          {/* https://protocol.tailwindui.com/ */}
          {/* https://stackoverflow.com/questions/72533318/change-the-style-with-the-mousemove-event-listener-in-reactjs */}
          {/* https://www.30secondsofcode.org/css/s/mouse-cursor-gradient-tracking */}
          {/* https://www.pluralsight.com/guides/inline-styling-with-react */}
          <div className="_effect_two radial-gradient-mask absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"></div>
        </div>
        <div className="_content relative rounded-xl px-4 pt-16 pb-4">
          <div className="_icon iterms center flex h-7 w-7 justify-center">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="fill-zinc-700/10 stroke-zinc-700 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400 h-5 w-5 transition-colors duration-300"
            >
              <path d="M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
              <path
                fill="none"
                d="M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"
              ></path>
              <path
                fill="none"
                d="M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              ></path>
            </svg>
          </div>
          <h3 className="text-sinc-900 mt-4 text-sm font-semibold leading-7">
            Connectors
          </h3>
          <p className="text-zinc-600 mt-1 text-sm">
            {" "}
            Learn about the connectors available that you can use to ingest data
            into your Data Warehouse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCards;
