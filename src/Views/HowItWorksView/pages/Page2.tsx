
interface Props {}

function Page2(props: Props) {
    const {} = props

    return (
        <>
        <div className='w-full flex justify-center my-[300px]'>
            <div className='w-[1440px] relative'>
                <div className='w-full relative' >
                    <div className='absolute flex flex-col top-[-150px] md2:top-0 right-[36px] text-right'>
                        <h1 className='text-[#1E2A39] text-[16px] md2:text-[24px] font-normal leading-8 tracking-[0.9px] max-w-[589px]  '>
                        EVERY TRANSACTION IS INSPECTED, CERTIFIED. AND INSURED
                        </h1>
                        <p className='text-[#000] text-[11px] md2:text-[16px] opacity-50 font-normal max-w-[589px] my-[20px]'>
                        All trades on the USE are backed by real ammo. No exceptions. 
                        Sellers are required to ship their ammo to our secured armories
                         where experts inspect and certify a broad range of attributes 
                         including brand, features, and quality. Only then does trading begin.
                        </p>

                    </div>
                    </div>
                    <div className=''>

                    
                <span className="cursor-pointer  absolute  bottom-0 right-0" >
                <img className="" src="/images/inspect-belt.f8ccc5f9 1.svg" alt="Logo" />
              </span>
                    <span className="cursor-pointer  hidden md2:flex relative  bottom-0 left-0  w-full  ">
                <img className="   inline" src="/images/Group 43760.png" alt="Logo" />
              </span>
              <span className="  cursor-pointer relative md2:hidden  left-0  w-full ">
                <img className="   inline" src="/images/Group 43763.png" alt="Logo" />
              </span>
              
              </div>

                

            </div>
        </div>
        
        </>
    )
}

export default Page2
