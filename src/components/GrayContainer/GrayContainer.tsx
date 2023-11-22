import { ReactNode } from "react";

export default function GrayContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-[1536px] max-sm:w-[640px] max-md:w-[768px] max-lg:w-[1024px] max-xl:[1280px]  s4:w-[375] max-s1:w-[500px] max-s2:w-[400px] max-s3:w-[375px] max-s4:w-[350px]   h-[800px] px-14 rounded-3xl	  bg-gray-100 mx-auto p-4  text-center ">
      {children}
    </div>
  );
}
