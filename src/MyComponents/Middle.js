import React from 'react'

import { GiForkKnifeSpoon,GiCoolSpices } from "react-icons/gi";
import { BsFillBasket2Fill } from "react-icons/bs";

function Middle({ img1, title1, bodycont1, ingre1, Spices1, colorcode11, colorcode12, img2, title2, bodycont2, ingre2, Spices2, colorcode21, colorcode22, colorcode23, colorcode24, colorcode25 }) {
    return (
        <div className='mt-[20px] over overflow-hidden'>

            <div className='lg:grid lg:grid-cols-2 lg:gap-x-[40px] lg:ml-[20px]'>

                <div className='mt-[60px]'>
                    <img src={img1}></img>
                </div>

                <div className='mt-[60px] rotate-[45deg] z-[-1]' style={{background:colorcode11}}>

                    <p className='text-[60px] absolute text-brown opacity-30'>........................................................</p>

                    <div className='rotate-[270deg] z-[-3] relatives' style={{background:colorcode12}}>

                        <p className=' opacity-40 relative'>------------------------------------------------------------------------------------------------------------------</p>

                        <div className='rotate-[45deg]'>


                            <div className='text-[30px] font-extrabold' style={{ fontFamily: "cursive" }}>
                            <GiForkKnifeSpoon/>{title1}
                            </div>

                            <div className='mt-[10px]'>

                                <div>
                                    <div className='text-[15px]' style={{ fontFamily: "monospace" }}>
                                        {bodycont1}
                                    </div>
                                </div>

                                <br></br>

                                <div className='text-[20px] font-extrabold' style={{ fontFamily: "cursive" }}>
                                <BsFillBasket2Fill/>Ingredients
                                </div>
                                <div className='text-[15px]' style={{ fontFamily: "monospace" }}>
                                    {ingre1}
                                </div>

                                <br></br>

                                <div>
                                    <div className='text-[20px] font-extrabold' style={{ fontFamily: "cursive" }}>
                                        <GiCoolSpices/>Spices
                                    </div>
                                    <div className='text-[15px]' style={{ fontFamily: "monospace" }}>

                                        {Spices1}
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <div className='mt-[60px]'>
                    <div className='z-[-6] rotate-[90deg] ' style={{background:colorcode21}}>
                        <div className='z-[-5] rotate-[45deg]' style={{background:colorcode22}} >
                            <div className='z-[-4] rotate-[45deg]' style={{background:colorcode23}}>
                                <div className='z-[-3] rotate-[45deg]' style={{background:colorcode24}}>
                                    <div className='z-[-2] rotate-[45deg]' style={{background:colorcode25}}>

                                        <div className='rotate-[90deg]'>
                                            <div className='text-[30px] font-extrabold' style={{ fontFamily: "cursive" }}>
                                            <GiForkKnifeSpoon/>{title2}
                                            </div>

                                            <div className='mt-[10px]'>

                                                <div>
                                                    <div className='text-[15px]' style={{ fontFamily: "monospace" }}>
                                                        {bodycont2}
                                                    </div>
                                                </div>

                                                <br></br>

                                                <div className='text-[20px] font-extrabold' style={{ fontFamily: "cursive" }}>
                                                <BsFillBasket2Fill/>Ingredients
                                                </div>
                                                <div className='text-[15px]' style={{ fontFamily: "monospace" }}>
                                                    {ingre2}
                                                </div>

                                                <br></br>

                                                <div>
                                                    <div className='text-[20px] font-extrabold' style={{ fontFamily: "cursive" }}>
                                                    <GiCoolSpices/>Spices
                                                    </div>
                                                    <div className='text-[15px]' style={{ fontFamily: "monospace" }}>

                                                        {Spices2}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>








                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[60px] z-[2]'>
                    <img src={img2}></img>
                </div>






            </div>
        </div>
    )
}

export default Middle