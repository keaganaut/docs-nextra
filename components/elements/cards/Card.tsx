import Link from "next/link";
import { ReactNode, useState } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

// TODO: icon size and propsType

export const Cards = ({ children }) => {
  return <div className="grid grid-cols-12 gap-5 my-6">{children}</div>;
};

export const Card = ({ icon, title, description, href }: CardProps) => {
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
      className="group relative flex flex-col col-span-12 md:col-span-6 lg:col-span-4 p-6 rounded-lg justify-start overflow-hidden border border-gray-100 dark:bg-gray-100 dark:border-gray-300 dark:hover:border-gray-400"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#e87f44] to-[#6e26ec] transition duration-150 opacity-0 group-hover:opacity-[10%]"
        style={radialGradientMaskStyle}
      ></div>

      <div className="">{icon}</div>
      <h3 className="font-semibold mt-4 mb-1">{title}</h3>
      <span className=" dark:text-gray-900">{description}</span>
    </Link>
  );
};
