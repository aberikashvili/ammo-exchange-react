interface TCardInfo {
  title: string;
  subTitle: string;
  imageUrl: string;
  imageUrlBack: string;
}

export default function Card({
  imageUrl,
  imageUrlBack,
  title,
  subTitle,
}: TCardInfo) {
  return (
    <div className="mx-auto md:w-80">
      <div className="bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10 mt-6">
          <div className="relative flex items-center justify-center">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={imageUrlBack}
              alt="Card Image"
            />
            <img
              src={imageUrl}
              alt="Ticket"
              className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10"
            />
          </div>
          <div className="px-6 text-center">
            <h5 className="text-2xl font-bold text-black pb-4">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
