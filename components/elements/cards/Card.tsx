import Link from "next/link";
import { ReactNode } from "react";
interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export const Cards = ({ children }) => {
  return <div className="grid grid-cols-12 gap-6 my-6">{children}</div>;
};

export const Card = ({ icon, title, description, href }: CardProps) => {
  return (
    <Link
      href={href}
      className="card group flex flex-col col-span-12 md:col-span-6 lg:col-span-4 p-6 rounded-lg justify-start overflow-hidden border border-gray-200 dark:border-gray-600"
    >
      <div className="content-icon">{icon}</div>
      <h3 className="content-title font-semibold mt-4 mb-1">{title}</h3>
      <span className="content-description">{description}</span>
    </Link>
  );
};
