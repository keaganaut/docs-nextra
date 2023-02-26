import Link from "next/link";
import { ReactNode } from "react";
interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export const Cards = ({ children }) => {
  return <div className="grid grid-cols-12 gap-5 my-6">{children}</div>;
};

export const Card = ({ icon, title, description, href }: CardProps) => {
  return (
    <Link
      href={href}
      className="group flex flex-col col-span-12 md:col-span-6 lg:col-span-4 p-6 rounded-lg justify-start overflow-hidden border border-gray-100 dark:border-gray-300 dark:hover:border-gray-700"
    >
      <div className="">{icon}</div>
      <h3 className="font-semibold mt-4 mb-1">{title}</h3>
      <span className=" dark:text-gray-900">{description}</span>
    </Link>
  );
};
