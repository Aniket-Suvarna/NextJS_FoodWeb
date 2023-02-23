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
                <div className="text-[30px]" style={{fontFamily:"cursive"}}>
                    <div>THE ONLY THING</div>
                    <div>I LIKE BETTER THAN</div>
                    <div>TALKING ABOUT FOOD</div>
                    <div>IS EATING FOOD</div>
                </div>

            </div>

        </div>


    )
}

export default Fotter