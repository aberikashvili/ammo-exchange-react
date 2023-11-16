interface SmallHeaderProps {
  children: React.ReactNode;
  classname?: string;
}

const SmallHeader = ({ children, classname }: SmallHeaderProps) => {
  return (
    <h2
      className={`text-[24px] text-[#1E2A39] leading-[31.2px] tracking-[0.9px] ${classname}`}
    >
      {children}
    </h2>
  );
};

export default SmallHeader;
