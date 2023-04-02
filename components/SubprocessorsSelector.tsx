import dynamic from "next/dynamic";
import { parse } from "path";
import { useState } from "react";
import { FontAwesomeIcon } from "./icons/FontAwesomeIcon";

interface SubprocessorsSelectorProps {
  pages: string[];
}

export const SubprocessorsSelector = ({
  pages,
}: SubprocessorsSelectorProps) => {
  //TODO: error handling if content directory is empty
  const [selected, setSelected] = useState<string>(pages[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const TranscludedContent = dynamic(
    () => import(`pages/legal/_subprocessors-updates/${selected}`),
    {
      ssr: false,
    }
  );

  return (
    <section className="mt-8">
      <div
        className="flex relative justify-end"
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          onClick={handleOpen}
          className="flex flex-row items-center bg-gray-100 invert dark:invert-0 border border-gray-300 text-primary rounded-md mb-4 dark:hover:border-gray-400 dark:hover:bg-gray-200 transition"
          type="button"
        >
          <div className="flex space-x-3 items-center px-4 border-r border-gray-300  py-2">
            <span className="">
              <FontAwesomeIcon
                width={16}
                height={16}
                fill="white"
                className="w-4 h-4 fill-primary dark:invert-0"
                symbol="clock-rotate-left"
              />
            </span>
            <div className="border-gray-300">{parse(selected).name}</div>
          </div>

          <span className="px-2">
            <FontAwesomeIcon
              width={16}
              height={16}
              fill="white"
              className={`w-4 h-4 fill-primary dark:invert-0 transition ease-in-out duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              symbol="chevron-down"
            />
          </span>
        </button>
        {isOpen && (
          <div className="w-48 top-12 z-10 absolute bg-primary dark:bg-gray-100 border border-gray-1000 dark:border-gray-300 rounded-md overflow-hidden shadow-md">
            <ol aria-labelledby="dropdownHoverButton">
              {pages.map((page, index) => {
                return (
                  <li
                    className="flex items-center py-2 px-4 cursor-pointer hover:bg-gray-1200/40 dark:hover:bg-gray-300"
                    key={index}
                    onClick={() => {
                      setSelected(page);
                      setIsOpen(false);
                    }}
                  >
                    {parse(page).name}
                    {index === 0 ? (
                      <small className="py-[2px] px-[6px] ml-4  bg-purple-700 dark:bg-purple-500 text-primary rounded-[6px] text-xs font-bold">
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
