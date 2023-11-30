import { useState } from "react"


function Page1() {

    const [selectedList, setSelectedList] = useState<number>()

    const handleList = (num: number) => {
        setSelectedList(num)
    }

    return (
        <>
            <div className='w-full flex justify-center my-[80px]'>
                <div className='w-[1440px]'>
                    <div className='flex justify-center w-full'>
                        <div className='flex-col w-full  text-center'>
                            <p className=' font-[Poppins] text-[#1E2A39] opacity-50 text-[18px]'>FAQ's</p>
                            <h1 className=' font-[Poppins] text-[#1E2A39] text-[38px]'>Frequently asked questions</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-center px-[50px]">
                        <div className='flex-col w-full my-[100px] max-w-[1240px]'>
                            <div className='flex justify-between  items-center   text-[16px] h-[84px] text-[#323232]'>
                                <div className="flex flex-col gap-3">
                                    <p>HOW MUCH TOTAL AMMO IS BEING OFFERED</p>
                                    {
                                        selectedList === 1 && (
                                            <div className="flex gap-3">
                                                <span className="border-l-[#3988F6] border-l-4" />
                                                <p className="text-[#000] text-[12px] opacity-50 ">We are offering up to $1.5M of ammo -- the exact amount
                                                    is still being determined -- on a first come, first serve basis.</p>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    selectedList === 1 ? <i className="bi bi-dash-circle" onClick={() => {
                                        setSelectedList(0)
                                    }}></i> : <i className="bi bi-plus-circle" onClick={() => {
                                        setSelectedList(1)
                                    }}></i>
                                }

                            </div>
                            <div className='flex justify-between items-center border-y border-[#D1D1D1] font-[Poppins] text-[16px] h-[84px] text-[#323232]'>
                                <div className="flex flex-col gap-3">


                                    <p>AM I REQUIRED TO SELL THIS AMMO OR CAN I SHOOT IT?</p>

                                    {
                                        selectedList === 2 && (
                                            <div className="flex gap-3">
                                                <span className="border-l-[#3988F6] border-l-4" />
                                                <p className="text-[#000] text-[12px] opacity-50 ">We are offering up to $1.5M of ammo -- the exact amount
                                                    is still being determined -- on a first come, first serve basis.</p>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    selectedList === 2 ? <i className="bi bi-dash-circle" onClick={() => {
                                        setSelectedList(0)
                                    }}></i> : <i className="bi bi-plus-circle" onClick={() => {
                                        setSelectedList(2)
                                    }}></i>
                                }

                            </div>
                            <div className='flex justify-between items-center border-y font-[Poppins] border-[#D1D1D1] text-[16px] h-[84px] text-[#323232]'>
                                <div className="flex flex-col gap-3">
                                    <p>WHAT ARE THE CALIBERS AND HOW MUCH WILL I RECEIVE?</p>
                                    {
                                        selectedList === 3 && (
                                            <div className="flex gap-3">
                                                <span className="border-l-[#3988F6] border-l-4" />
                                                <p className="text-[#000] text-[12px] opacity-50 ">We are offering up to $1.5M of ammo -- the exact amount
                                                    is still being determined -- on a first come, first serve basis.</p>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    selectedList === 3 ? <i className="bi bi-dash-circle" onClick={() => {
                                        setSelectedList(0)
                                    }}></i> : <i className="bi bi-plus-circle" onClick={() => {
                                        setSelectedList(3)
                                    }}></i>
                                }


                            </div>
                            <div className='flex justify-between items-center border-y font-[Poppins] border-[#D1D1D1] text-[16px] h-[84px] text-[#323232]'>
                                <div className="flex flex-col gap-3">
                                    <p>HOW IS FOUNDING TRADER PRICING SET?</p>
                                    {
                                        selectedList === 4 && (
                                            <div className="flex gap-3">
                                                <span className="border-l-[#3988F6] border-l-4" />
                                                <p className="text-[#000] text-[12px] opacity-50 ">We are offering up to $1.5M of ammo -- the exact amount
                                                    is still being determined -- on a first come, first serve basis.</p>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    selectedList === 4 ? <i className="bi bi-dash-circle" onClick={() => {
                                        setSelectedList(0)
                                    }}></i> : <i className="bi bi-plus-circle" onClick={() => {
                                        setSelectedList(4)
                                    }}></i>
                                }
                            </div>
                            <div className='flex justify-between items-center border-y font-[Poppins] border-[#D1D1D1] text-[16px] h-[84px] text-[#323232]'>
                            <div className="flex flex-col gap-3">

                                <p>WHO IS THIS FOR?</p>
                                {
                                        selectedList === 5 && (
                                            <div className="flex gap-3">
                                                <span className="border-l-[#3988F6] border-l-4" />
                                                <p className="text-[#000] text-[12px] opacity-50 ">We are offering up to $1.5M of ammo -- the exact amount
                                                    is still being determined -- on a first come, first serve basis.</p>
                                            </div>
                                        )
                                    }
                            </div>
                            {
                                    selectedList === 5 ? <i className="bi bi-dash-circle" onClick={() => {
                                        setSelectedList(0)
                                    }}></i> : <i className="bi bi-plus-circle" onClick={() => {
                                        setSelectedList(5)
                                    }}></i>
                                }
                            </div>
                            <div className='flex justify-between items-center border-y font-[Poppins] border-[#D1D1D1] text-[16px] h-[84px] text-[#323232]'>
                            <div className="flex flex-col gap-3">
                                <p>HOW EXACTLY DOES IT WORK?</p>
                                {
                                        selectedList === 6 && (
                                            <div className="flex gap-3">
                                                <span className="border-l-[#3988F6] border-l-4" />
                                                <p className="text-[#000] text-[12px] opacity-50 ">We are offering up to $1.5M of ammo -- the exact amount
                                                    is still being determined -- on a first come, first serve basis.</p>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    selectedList === 6 ? <i className="bi bi-dash-circle" onClick={() => {
                                        setSelectedList(0)
                                    }}></i> : <i className="bi bi-plus-circle" onClick={() => {
                                        setSelectedList(6)
                                    }}></i>
                                }

                            </div>
                            <div className='flex justify-between items-center font-[Poppins] text-[16px] border-[#D1D1D1] h-[84px] text-[#323232]'>
                            <div className="flex flex-col gap-3">
                                <p>WHAT HAPPENS AFTER THE FIRST LAUNCH?</p>
                                {
                                        selectedList === 7 && (
                                            <div className="flex gap-3">
                                                <span className="border-l-[#3988F6] border-l-4" />
                                                <p className="text-[#000] text-[12px] opacity-50 ">We are offering up to $1.5M of ammo -- the exact amount
                                                    is still being determined -- on a first come, first serve basis.</p>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    selectedList === 7 ? <i className="bi bi-dash-circle" onClick={() => {
                                        setSelectedList(0)
                                    }}></i> : <i className="bi bi-plus-circle" onClick={() => {
                                        setSelectedList(7)
                                    }}></i>
                                }


                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center w-full'>
                        <div className='flex-col text-center w-full'>
                            <p className='font-[Poppins] text-[#1E2A39] opacity-50 text-[18px]'>FOR MORE INFORMATION CONTACT</p>
                            <h1 className=' font-[Poppins] text-[#1E2A39] text-[24px] sm:text-[38px]'>trading@ammoexchange.com</h1>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Page1
