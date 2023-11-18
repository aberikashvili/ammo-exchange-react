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
    <div className="mx-auto md:w-80 max-lg:w-[300px] mb-6 ">
      <div
        className={`bg-transparent ${borderClass} border-gray-100 rounded-lg shadow`}
      >
        <div className="flex flex-col items-center max-lg:pb-10 mt-6 h-[300px] ">
          <div className="relative flex items-center justify-center mt-6">
            <img
              className="w-[110px] h-[110px] mb-3 rounded-full shadow-lg"
              src={imageUrlBack}
              alt="Card Image"
            />
            <img
              src={imageUrl}
              alt="Ticket"
              className="absolute top-14   left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="px-6 pb-6  text-center">
            <h5 className="text-2xl font-bold text-black pb-4">{title}</h5>
            <p className="font-normal  text-gray-700 dark:text-gray-400">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
