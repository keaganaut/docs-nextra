import { Status } from "./Status";

export const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap max-w-[90rem] mx-auto border-t border-gray-300 p-4">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mx-auto max-w-[90rem] bg-red-200 border-t border-gray-300"> */}

      {/* <div className="col-span-1 col-end-4 bg-[black] flex flex-col justify-center items-center p-4">
        <Status />
      </div> */}
      <div className="flex flex-col bg-red-500 justify-between mr-auto">
        <div className="flex flex-row">Icon</div>
        <Status />
      </div>
      <div className="bg-blue-500 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-blue-200">
          <h6 className="text-lg">Product</h6>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/">Integrate</a>
            </li>
            <li>
              <a href="/">Model</a>
            </li>
            <li>
              <a href="/">Orchestrate</a>
            </li>
            <li>
              <a href="/">Visualize</a>
            </li>
            <li>
              <a href="/">Export</a>
            </li>
            <li>
              <a href="/">Data lineage</a>
            </li>
          </ul>
        </div>
        <div className="bg-yellow-200">
          <h6 className="text-lg">Solutions</h6>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/">E-commerce</a>
            </li>
            <li>
              <a href="/">Agency</a>
            </li>
            <li>
              <a href="/">B2B SaaS</a>
            </li>
          </ul>
        </div>
        <div className="bg-green-200">
          <h6 className="text-lg">Learn more</h6>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/">Guides</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Customer stories</a>
            </li>
          </ul>
        </div>
        <div className="bg-yellow-200">
          <h6 className="text-lg">Company</h6>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Press & news</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
