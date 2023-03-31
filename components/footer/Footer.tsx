import { LinkedInIcon, SlackBwIcon, YoutubeIcon } from "../icons/third-party";
import Y42Logo from "../logos/Y42Logo";
import { Status } from "./Status";

export const Footer = () => {
  return (
    <footer className="flex flex-col max-w-[90rem] mx-auto px-6 py-8 border-t border-gray-1200 dark:border-gray-300">
      <div className="flex flex-row flex-wrap justify-between">
        <div className="flex flex-row lg:flex-col lg:w-auto w-full justify-between lg:items-start mr-auto mb-8 lg:mb-0">
          <div className="flex flex-row items-center">
            <Y42Logo height={16} />
            <div className="flex flex-row space-x-5 items-center ml-12">
              <a href="/" className="">
                <SlackBwIcon className="h-5 w-5  fill-secondary invert dark:invert-0 hover:fill-primary transition" />
              </a>
              <a href="/" className="">
                <LinkedInIcon className="h-5 w-5  fill-secondary invert dark:invert-0 hover:fill-primary transition" />
              </a>
              <a href="/" className="">
                <YoutubeIcon className="h-6 w-6  fill-secondary invert dark:invert-0 hover:fill-primary transition" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-24 gap-y-8 mt-8 lg:mt-0">
          <div className="">
            <h6 className="text-sm text-primary invert dark:invert-0">
              Product
            </h6>
            <ul className="mt-4 space-y-2 text-sm text-secondary invert dark:invert-0">
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
            <h6 className="text-sm text-primary invert dark:invert-0">
              Solutions
            </h6>
            <ul className="mt-4 space-y-2 text-sm text-secondary invert dark:invert-0">
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
            <h6 className="text-sm text-primary invert dark:invert-0">
              Learn more
            </h6>
            <ul className="mt-4 space-y-2 text-sm text-secondary invert dark:invert-0">
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
            <h6 className="text-sm text-primary invert dark:invert-0">
              Company
            </h6>
            <ul className="mt-4 space-y-2 text-sm text-secondary invert dark:invert-0">
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
      <section className="flex flex-col lg:flex-row flex-wrap justify-between items-center lg:items-baseline mt-16">
        <div className="text-sm text-secondary invert dark:invert-0 order-last lg:order-1 mt-4">
          © 2023 Y42. All rights reserved
        </div>
        <div className="order-first lg:order-2 mb-4">
          <Status />
        </div>
        <div className="text-sm text-secondary invert dark:invert-0 space-x-8 lg:order-last">
          <a href="/">Imprint</a>
          <a href="/">Privacy policy</a>
          <a href="/">Terms of service</a>
        </div>
      </section>
    </footer>
  );
};
