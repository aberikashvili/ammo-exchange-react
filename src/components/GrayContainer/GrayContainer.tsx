import { ReactNode } from "react";

export default function GrayContainer({ children }: { children: ReactNode }) {
  return (
    <div className="2xl:w-[1536px] s4:w-[375]   h-[800px] 2xl:px-14 rounded-3xl	 shadow bg-gray-100 mx-auto p-4  text-center ">
      {children}
    </div>
  );
}
