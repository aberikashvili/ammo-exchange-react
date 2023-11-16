interface BigHeaderProps {
  children: React.ReactNode;
  classname: string;
}

const BigHeader = ({ children, classname }: BigHeaderProps) => {
  return (
    <h2
      className={`text-[50px] leading-[65px] tracking-[0.9px] max-xl:text-center max-md:text-[24px] max-md:leading-[31.2px] text-transform: uppercase ${classname}`}
    >
      {children}
    </h2>
  );
};

export default BigHeader;
