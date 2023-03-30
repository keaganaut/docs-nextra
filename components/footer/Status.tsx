import { useEffect, useState } from "react";

export const Status = () => {
  const [description, setDescription] = useState();

  useEffect(() => {
    fetch("https://y42status.com/api/v2/status.json")
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.status.description);
      });
  }, []);

  console.log(description);

  return (
    <a
      href="https://y42status.com/"
      target="_blank"
      className="flex flex-row border border-gray-900 dark:border-gray-300 transition px-3 py-1 items-center rounded-lg dark:hover:bg-gray-100/70 dark:hover:border-gray-400 text-sm"
    >
      Status: <span className="w-2 h-2 m-2 bg-green-700 rounded-full"></span>
      <div className="text-green-700">{description}</div>
    </a>
  );
};
