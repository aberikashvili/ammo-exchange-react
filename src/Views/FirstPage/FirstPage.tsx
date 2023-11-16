import title from "../../assets/images/Group 144.png";
import subtitle from "../../assets/images/Group 136.png";
import background from "../../assets/images/Group 43759.png";

export default function FirstPage() {
  return (
    <div className="flex justify-center items-center text-black h-screen relative">
      <img
        className="absolute z-0 w-full h-full object-cover"
        src={background}
        alt="Background"
      ></img>

      <div className="z-10 flex flex-col items-center justify-center text-center  w-screen">
        <div className="max-w-2xl p-4 text-center">
          <div className="font-bold tracking-tight text-5xl text-black relative p-4 ">
            <img src={title} alt="Title" className="mx-auto" />
          </div>
        </div>
        <div className="mt-80 z-10 s4:w-[100px]">
          <img src={subtitle} alt="Subtitle" />
        </div>
      </div>
    </div>
  );
}
