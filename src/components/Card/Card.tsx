interface TCardInfo {
  title: string;
  subTitle: string;
  imageUrl: string;
  imageUrlBack: string;
  borderClass: string;
}

export default function Card({
  imageUrl,
  imageUrlBack,
  title,
  subTitle,
  borderClass,
}: TCardInfo) {
  return (
    <div className="mx-auto md:w-80 max-xl:w-[300px]  mb-6 ">
      <div className="bg-transparent border border-gray-100 rounded-xl shadow h-[360px] max-xl:h-[320px]">
        <div className="flex flex-col items-center max-xl:pb-10 max-xl:mt-6 mt-2  ">
          <div className="relative flex items-center justify-center mt-[43px] max-xl:mt-0">
            <img
              className="w-[110px] h-[110px] mb-3 rounded-full shadow-xl"
              src={imageUrlBack}
              alt="Card Image"
            />
            <img
              src={imageUrl}
              alt="Ticket"
              className="absolute top-14   left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="max-xl:pt-0 text-center px-[23px]">
            <h5 className="text-2xl font-bold text-black pb-4">{title}</h5>
            <p className="font-normal pt-[30px] max-xl:pt-0 text-gray-700 dark:text-gray-400">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
