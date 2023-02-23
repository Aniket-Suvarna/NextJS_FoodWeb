import React from 'react'

function Fotter() {
    return (
        <div className=' text-white lg:ml-2'>
            <div className='grid lg:gap-x-[200px] grid-cols-3 text-[12px] ml-[15px] lg:text-[18px]'>
                <div>
                    <img src="/BG1.jpg"></img>
                </div>
                <div>
                    <img src="/quotefood.jpg"></img>
                </div>
                <div className="lg:text-[30px] text-[13px] " style={{ fontFamily: "cursive" }}>
                    <div>THE ONLY THING</div>
                    <div>I LIKE BETTER THAN</div>
                    <div>TALKING ABOUT FOOD</div>
                    <div>IS EATING FOOD</div>
                </div>

            </div>
            <div className='flex justify-center font-mono font-light opacity-50 mt-2 pb-4'>
                <img src='./C.png' className='mr-2 w-[25px]'></img><div>Designed by Aniket Suvarna</div>
            </div>

        </div>


    )
}

export default Fotter