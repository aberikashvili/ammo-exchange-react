export default function Button({ text, pxValue }: any) {
  return (
    <button
      type="button"
      className={`text-white bg-[#2557D6] font-medium rounded-lg text-sm px-${pxValue} py-2.5 text-center inline-flex items-center mr-2 mb-2`}
    >
      {text}
    </button>
  );
}
