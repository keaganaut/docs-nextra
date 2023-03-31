import dynamic from "next/dynamic";
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
    <section className="">
      <button
        onClick={handleOpen}
        className="flex flex-row items-center justify-center bg-gray-100 border border-gray-300 text-primary rounded-md divide-x dark: divide-gray-300"
        type="button"
      >
        <span className="py-2 px-4 border-gray-300 font-">{selected}</span>

        <span className="py-3 px-4">
          <FontAwesomeIcon
            width={16}
            height={16}
            fill="white"
            className="w-4 h-4 fill-gray-800 dark:fill-[white]"
            symbol="chevron-down"
          />
        </span>
      </button>
      {isOpen && (
        <div className="z-10 absolute" onMouseLeave={() => setIsOpen(false)}>
          <ol aria-labelledby="dropdownHoverButton">
            {pages.map((page, index) => {
              return (
                <li
                  className="cursor-pointer bg-red-200"
                  key={index}
                  onClick={() => setSelected(page)}
                >
                  {page}
                </li>
              );
            })}
          </ol>
        </div>
      )}
      <TranscludedContent />
    </section>
  );
};
