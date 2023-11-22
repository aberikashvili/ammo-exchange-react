
interface Props {}

function Page4(props: Props) {
    const {} = props

    return (
        <>
        <div className='flex justify-center w-full my-[300px]'>
            <div className='w-[1440px] '>
                <div className='flex  flex-col items-center mb-[100px] w-full'>
                    <h1 className='text-[#1E2A39] text-[24px] font-normal leading-8 tracking-[0.9px] max-w-[400px] text-center'>
                    THE ONLY INVESTMENT PORTFOLIO YOU CAN SAFELY SHOOT
                    </h1>
                    <p className='text-[#000] text-[16px] opacity-50 font-normal md2:w-[854px] xsm:w-[350px] text-center'>
                    It's your ammo. Whether you need boxes for a hunting trip or 
                    just want to spend an hour at the shooting range, your ammo is 
                    always ready. Open your portfolio and click "Ship to Me". Our 
                    team will ship your boxes within 48 hours. It's like having your 
                    own personal armory; actually, that's exactly what it is.
                    </p>

                </div>
                <div className='w-full relative'>
                     <span className="hidden md2:block cursor-pointer relative" >
                <img className="  inline" src="/images/Group 43762.png" alt="Logo" />
              </span>
              <span className="md2:hidden block cursor-pointer relative " >
                <img className=" w-[1321px] h-[746px]  inline" src="/images/Group 43654.png" alt="Logo" />
              </span>
              <span className="cursor-pointer " >
                <img className=" absolute bottom-0 right-0 w-[760px] h-[355px]  inline" src="/images/Group 43754.svg" alt="Logo" />
              </span>

                </div>
               

            </div>
        
        </div>


        </>
    )
}

export default Page4
