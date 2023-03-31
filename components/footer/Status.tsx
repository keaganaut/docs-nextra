import { useEffect, useState } from "react";

export const Status = () => {
  const [description, setDescription] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://y42status.com/api/v2/status.json")
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.status.description);
        setIndicator(data.status.indicator);
      });
  }, []);

  return (
    <a
      href="https://y42status.com/"
      target="_blank"
      className="flex flex-row border border-gray-1100 dark:border-gray-300 transition px-3 py-1 items-center rounded-lg hover:bg-gray-1200/30 dark:hover:bg-gray-100/70 dark:hover:border-gray-400"
    >
      <span className="text-sm text-secondary invert dark:invert-0">
        Status:
      </span>
      <span
        className={`w-2 h-2 m-2 ${
          indicator == "none"
            ? "bg-green-700"
            : indicator == "minor"
            ? "bg-yellow-900"
            : "bg-red-700"
        } rounded-full`}
      ></span>

      {/* https://y42status.com/api#summary endpoint includes an indicator - one of none, minor, major, or critical */}
      {/* <div className={`text-sm ${getIndicatorColor(indicator)}`}> */}
      <div
        className={`text-sm ${
          indicator == "none"
            ? "text-green-700"
            : indicator == "minor"
            ? "text-yellow-900"
            : "text-red-700"
        }`}
      >
        {description}
      </div>
    </a>
  );
};
