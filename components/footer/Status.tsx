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
      className="flex flex-row border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100/70 hover:border-gray-500 text-sm"
    >
      Status: <div className="text-green-700">{description}</div>
    </a>
  );
};
