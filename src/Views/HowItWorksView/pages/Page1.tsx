

function Page1() {
  return (
    <>
      <div className='flex justify-center w-full my-[40px] '>
        <div className='w-[1440px] '>
          <div className='flex justify-center'>
            <div className='max-w-[304px]'>
              <h1 className="text-[#1E2A39] text-[48px] font-normal leading-8 tracking-[0.9px]">
                How It Works
              </h1>
              <p className='text-center my-[20px]'>
                WE START BY PARTNERING WITH
                ONLY THE HIGHEST QUALITY BRANDS
              </p>
            </div>
          </div>

          <div className='  flex flex-col xl:flex-row xl:justify-around xl:items-center relative w-full  px-[36px] my-[44px]'>
            <div className='max-w-[469px]'>
              <h1 className="text-[#1E2A39] text-[24px] font-normal leading-8 tracking-[0.9px]">
              YOU'LI. ALWAYS FIND AMMO IN-STOCK AND AT GREAT PRICES
              </h1>
              <p className='my-[20px]  leading-[20.8px] tracking-[0.9px] text-[16px] max-w-[469px]'>
                USE connects the world's largest suppliers directly to
                consumers. There are no middlemen, no empty 
                <br />
                shelves, and
                <br />
                no pre-set prices. Our real-time trading engine gives  
                <br />
                everyone
                <br />
                equal opportunity to buy and sell as free-market
                <br /> 
                prices
                <br />
                fluctuate to balance the ebb and flow of supply and 
                <br />
                demand.
                <br />
              </p>
            </div>

            <div className=' relative xl:z-10'>
              <img
                className="  w-[700px] sm:h-[650px] "
                src="/images/EDITED1.png"
                alt="Logo"
              />
            </div>

            <div className='absolute   bottom-[-145px] xl:bottom-[-40px] left-[-40px] '>
              <img
                className=" inline w-[909px] h-[333px]"
                src="/images/Group 43742.svg"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
