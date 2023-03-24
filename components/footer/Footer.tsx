import { Status } from "./Status";

export const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mx-auto max-w-[90rem] border-t border-gray-300 ">
      <div className="col-span-1 col-end-4 bg-[black] flex flex-col justify-center items-center p-4">
        <Status />
      </div>
    </div>
  );
};
