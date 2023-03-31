import dynamic from "next/dynamic";
import { parse } from "path";
import { useState } from "react";
import { FontAwesomeIcon } from "./icons/FontAwesomeIcon";

interface TranscludeSelectorProps {
  pages: string[];
}

export const TranscludeSelector = ({ pages }: TranscludeSelectorProps) => {
  const [selected, setSelected] = useState<string>(pages[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const TranscludedContent = dynamic(
    () => import(`pages/trust-center/_subprocessors/${selected}`),
    {
      ssr: false,
    }
  );

  return (
    <section className="mt-8">
      {/* <span className="px-1 mb-24">Published date</span> */}
      <div
        className="flex relative justify-end"
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          onClick={handleOpen}
          className="flex flex-row items-center dark:bg-gray-100 border border-gray-300 text-primary rounded-md mb-4 dark:hover:border-gray-400 dark:hover:bg-gray-200 transition"
          type="button"
        >
          <div className="flex space-x-3 items-center px-4 border-r dark:border-gray-300 py-2">
            <span className="">
              <FontAwesomeIcon
                width={16}
                height={16}
                fill="white"
                className="w-4 h-4 fill-gray-800 dark:fill-[white]"
                symbol="clock-rotate-left"
              />
            </span>
            <div className="border-gray-300 font-medium">
              {parse(selected).name}
            </div>
          </div>

          <span className="px-2">
            <FontAwesomeIcon
              width={16}
              height={16}
              fill="white"
              className={`w-4 h-4 fill-gray-800 dark:fill-[white] transition ease-in-out duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              symbol="chevron-down"
            />
          </span>
        </button>
        {isOpen && (
          <div className="w-48 top-12 z-10 absolute bg-gray-100 border border-gray-300 text-secondary rounded-md overflow-hidden shadow-md">
            <ol aria-labelledby="dropdownHoverButton">
              {pages.map((page, index) => {
                return (
                  <li
                    className="flex items-center py-2 px-4 cursor-pointer dark:hover:bg-gray-300"
                    key={index}
                    onClick={() => setSelected(page)}
                  >
                    {parse(page).name}
                    {index === 0 ? (
                      <small className="py-[2px] px-[6px] ml-4 bg-purple-500 text-[white] dark:text-primary rounded-[6px] text-xs font-bold">
                        Latest
                      </small>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
      <TranscludedContent />
    </section>
  );
};
