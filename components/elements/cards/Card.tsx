export const Card = () => {
  return (
    <div className="grid grid-cols-12 gap-4 my-4">
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="card group flex flex-col p-6 rounded-lg justify-start overflow-hidden border border-red">
          <div className="content-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
          </div>
          <h3 className="content-title font-semibold mt-4 mb-2">
            Orchestration
          </h3>
          <span className="content-description">
            Deploy our Orchestration template, or view a live example
          </span>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="card group flex flex-col p-6 rounded-lg justify-start overflow-hidden border border-red">
          <div className="content-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
          </div>
          <h3 className="content-title font-semibold mt-4 mb-2">
            Orchestration
          </h3>
          <span className="content-description">
            Deploy our Orchestration template, or view a live example
          </span>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="card group flex flex-col p-6 rounded-lg justify-start overflow-hidden border border-red">
          <div className="content-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
          </div>
          <h3 className="content-title font-semibold mt-4 mb-2">
            Orchestration
          </h3>
          <span className="content-description">
            Deploy our Orchestration template, or view a live example
          </span>
        </div>
      </div>
    </div>
  );
};
