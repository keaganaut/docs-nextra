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
      <div className="flex relative" onMouseLeave={() => setIsOpen(false)}>
        <button
          onClick={handleOpen}
          className="flex flex-row items-center w-48 h-12 bg-gray-100 border border-gray-300 text-primary rounded-md divide-x dark: divide-gray-300"
          type="button"
        >
          <div className="flex flex-col relative py-2 px-4 justify-center items-center mx-auto border-gray-300">
            <span className="text-xs absolute -top-3 -left-0 font-medium dark:bg-gray-100 px-4">
              Published date
            </span>
            {parse(selected).name}
          </div>

          <span className="py-4 px-4">
            <FontAwesomeIcon
              width={16}
              height={16}
              fill="white"
              className="w-4 h-4 fill-gray-800 dark:fill-[white]"
              symbol={isOpen ? "chevron-up" : "chevron-down"}
            />
          </span>
        </button>
        {isOpen && (
          <div className="w-44 top-12 z-10 absolute bg-gray-100 border border-gray-300 text-secondary rounded-md">
            <ol aria-labelledby="dropdownHoverButton">
              {pages.map((page, index) => {
                return (
                  <li
                    className="py-2 px-4 cursor-pointer hover:bg-red-300"
                    key={index}
                    onClick={() => setSelected(page)}
                  >
                    {parse(page).name}
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
