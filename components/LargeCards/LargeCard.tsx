import Link from "next/link";
import { useState } from "react";

interface LargeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export const LargeCard = ({
  icon,
  title,
  description,
  href,
}: LargeCardProps) => {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (e: React.MouseEvent): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseLeft = e.clientX - rect.left;
    const mouseTop = e.clientY - rect.top;
    setMousePosition({ left: mouseLeft, top: mouseTop });
  };

  const radialGradientMaskStyle = {
    WebkitMaskImage: `radial-gradient(farthest-corner at ${mousePosition.left}px ${mousePosition.top}px, #fff, transparent)`,
    maskImage: `radial-gradient(farthest-corner at ${mousePosition.left}px ${mousePosition.top}px, #fff, transparent)`,
  };
  return (
    <Link
      href={href}
      className="hover:border-gray-9000 group relative col-span-12 flex flex-col justify-start overflow-hidden rounded-xl border border-gray-1000 p-6 shadow-sm hover:shadow-md dark:border-gray-300 dark:bg-gray-100 dark:shadow-lg dark:hover:border-gray-400 dark:hover:shadow-sm md:col-span-6 lg:col-span-4"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ffece0] to-[#ece0ff] opacity-0 transition duration-150 group-hover:opacity-[50%] dark:from-[#e87f44] dark:to-[#6e26ec] dark:group-hover:opacity-[10%]"
        style={radialGradientMaskStyle}
      ></div>

      <div className="z-10">
        <div className="opacity-[85%] group-hover:opacity-100">{icon}</div>
        <h3 className="mt-4 mb-1 font-semibold">{title}</h3>
        <span className=" dark:text-gray-900">{description}</span>
      </div>
    </Link>
  );
};
