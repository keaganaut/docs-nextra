import dynamic from "next/dynamic";
import { useState } from "react";

interface TranscludeSelectorProps {
  pages: string[];
}

export const TranscludeSelector = ({ pages }: TranscludeSelectorProps) => {
  const [selected, setSelected] = useState<string>(pages[0]);

  //   useEffect(() => {
  //     setArticles();
  //   }, []);

  const Foo = dynamic(
    () => import(`pages/trust-center/_subprocessors/${selected}`),
    {
      ssr: false,
    }
  );

  return (
    <div className="">
      <ol>
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
      <Foo />
    </div>
  );
};
