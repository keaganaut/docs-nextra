import { LinkedInIcon, SlackBwIcon, YoutubeIcon } from "../icons/third-party";
import Y42Logo from "../logos/Y42Logo";
import { Status } from "./Status";

export const Footer = () => {
  return (
    <footer className="flex flex-col max-w-[90rem] mx-auto px-6 py-8 border-t border-gray-1200 dark:border-gray-300">
      <div className="flex flex-row flex-wrap justify-between">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mx-auto max-w-[90rem] bg-red-200 border-t border-gray-300"> */}

        {/* <div className="col-span-1 col-end-4 bg-[black] flex flex-col justify-center items-center p-4">
        <Status />
      </div> */}
        <div className="flex flex-row lg:flex-col lg:w-auto w-full justify-between mr-auto">
          <div className="">
            <Y42Logo height={16} />
          </div>
          <div className="flex flex-row space-x-5">
            <a href="/" className="">
              <SlackBwIcon className="h-5 w-5  fill-gray-500 dark:fill-gray-1200 opacity-60 hover:opacity-100 transition" />
            </a>
            <a href="/" className="">
              <LinkedInIcon className="h-5 w-5  fill-gray-500 dark:fill-gray-1200 opacity-60 hover:opacity-100 transition" />
            </a>
            <a href="/" className="">
              <YoutubeIcon className="h-5 w-5  fill-gray-500 dark:fill-gray-1200 opacity-60 hover:opacity-100 transition" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8 mr-16 mt-8 lg:mt-0">
          <div className="">
            <h6 className="text-sm">Product</h6>
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
          <div className="">
            <h6 className="text-sm">Solutions</h6>
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
          <div className="">
            <h6 className="text-sm">Learn more</h6>
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
          <div className="">
            <h6 className="text-sm">Company</h6>
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
      </div>
      <section className="flex flex-row justify-between items-center mt-12">
        <span className="text-sm">Copyright lorem ipsum</span>
        <Status />
      </section>
    </footer>
  );
};
