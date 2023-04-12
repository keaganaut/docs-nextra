import { StatusBadge } from "./StatusBadge";
import Y42Logo from "./Y42Logo";
import { LinkedInIcon, SlackBwIcon, YoutubeIcon } from "./icons/third-party";

export const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-[90rem] flex-col border-t border-gray-1200 px-6 py-8 dark:border-gray-300">
      <div className="flex flex-row flex-wrap justify-between">
        <div className="mr-auto mb-8 flex w-full flex-row justify-between lg:mb-0 lg:w-auto lg:flex-col lg:items-start">
          <div className="flex flex-row items-center">
            <Y42Logo height={16} />
            <div className="ml-12 flex flex-row items-center space-x-5">
              <a href="/" className="">
                <SlackBwIcon className="h-5 w-5  fill-secondary invert transition hover:fill-primary dark:invert-0" />
              </a>
              <a href="/" className="">
                <LinkedInIcon className="h-5 w-5  fill-secondary invert transition hover:fill-primary dark:invert-0" />
              </a>
              <a href="/" className="">
                <YoutubeIcon className="h-6 w-6  fill-secondary invert transition hover:fill-primary dark:invert-0" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-24 gap-y-8 md:grid-cols-4 lg:mt-0">
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
      <section className="mt-16 flex flex-col flex-wrap items-center justify-between lg:flex-row lg:items-baseline">
        <div className="order-last mt-4 text-sm text-secondary invert dark:invert-0 lg:order-1">
          © 2023 Y42. All rights reserved
        </div>
        <div className="order-first mb-4 lg:order-2">
          <StatusBadge />
        </div>
        <div className="space-x-8 text-sm text-secondary invert dark:invert-0 lg:order-last">
          <a href="/">Imprint</a>
          <a href="/">Privacy policy</a>
          <a href="/">Terms of service</a>
        </div>
      </section>
    </footer>
  );
};
