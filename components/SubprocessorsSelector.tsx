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
      <div
        className="relative flex justify-end"
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          onClick={handleOpen}
          className="mb-4 flex flex-row items-center rounded-md border border-gray-300 bg-gray-100 text-primary invert transition dark:invert-0 dark:hover:border-gray-400 dark:hover:bg-gray-200"
          type="button"
        >
          <div className="flex items-center space-x-3 border-r border-gray-300 px-4  py-2">
            <span className="">
              <FontAwesomeIcon
                width={16}
                height={16}
                fill="white"
                className="h-4 w-4 fill-primary dark:invert-0"
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
              className={`h-4 w-4 fill-primary transition duration-200 ease-in-out dark:invert-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              symbol="chevron-down"
            />
          </span>
        </button>
        {isOpen && (
          <div className="absolute top-12 z-10 w-48 overflow-hidden rounded-md border border-gray-1000 bg-primary shadow-md dark:border-gray-300 dark:bg-gray-100">
            <ol aria-labelledby="dropdownHoverButton">
              {pages.map((page, index) => {
                return (
                  <li
                    className="flex cursor-pointer items-center py-2 px-4 hover:bg-gray-1200/40 dark:hover:bg-gray-300"
                    key={index}
                    onClick={() => {
                      setSelected(page);
                      setIsOpen(false);
                    }}
                  >
                    {parse(page).name}
                    {index === 0 ? (
                      <small className="ml-4 rounded-[6px] bg-purple-700  py-[2px] px-[6px] text-xs font-bold text-primary dark:bg-purple-500">
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
