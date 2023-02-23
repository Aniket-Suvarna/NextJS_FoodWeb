import React from 'react'
import Link from 'next/link'
function HomeMiddle() {
    return (
        <div className="lg:overflow-hidden">
            <img className='mb-2' src="/BG2.png"></img>

            <img className='mb-2' src="/BG3.jpg"></img>

            <img className='mb-2' src="/BG4.jpg"></img>



            <div className="lg:mt-10 lg:flex lg:static lg:ml-[20px] lg:mr-[-45px] lg:h-[450px]">


                <Link href="Indian">
                <div className="group mb-4 lg:mb-0 lg:relative">

                    <div className="lg:rounded-md lg:group-hover:bg-black lg:w-[300px] lg:text-center lg:absolute  lg:top-[270px]">
                        <p className="text-transparent lg:group-hover:text-white">Indian</p>
                    </div>

                    <img src="/IndianElements/IF2.jpg" className="lg:h-[275px] lg:w-[520px] shadow-2xl rounded-md"></img>
                </div>
                </Link>


                <Link href="Mexican">
                <div className="group mb-4 lg:mb-0 lg:relative">
                    <div className="lg:rounded-md lg:group-hover:bg-black lg:w-[300px] lg:text-center lg:left-[-16px] lg:relative lg:top-[335px]">
                        <p className="text-transparent lg:group-hover:text-white">Mexican</p>
                    </div>
                    <img src="/MexicanElements/MF1.jpg" className="lg:h-[275px] lg:w-[520px] ml-2
                lg:relative lg:top-10 lg:right-6 lg:shadow-2xl lg:rounded-md"></img>
                </div>
                </Link>


                <Link href="Indian">
                <div className="group mb-4 lg:mb-0 lg:relative">
                    
                <div className="lg:rounded-md lg:group-hover:bg-black lg:w-[310px] lg:text-center lg:left-[-32px] lg:relative lg:top-[405px]">
                        <p className="text-transparent lg:group-hover:text-white">Indian</p>
                    </div>
                    

                    <img src="/IndianElements/IF4.jpg" className="lg:h-[275px] lg:w-[520px] ml-2
                relative lg:top-28 lg:right-10 shadow-2xl rounded-md lg:z-40
                "></img>
                </div>
                </Link>


                <Link href="Mexican">
                <div className="group mb-4 lg:mb-0 relative">

                <div className="lg:rounded-md lg:group-hover:bg-black lg:w-[295px] lg:text-center lg:left-[-33px] lg:relative lg:bottom-[-335px]">
                        <p className="text-transparent lg:group-hover:text-white">Mexican</p>
                    </div>

                    <img src="/MexicanElements/MF2.jpg" className="lg:h-[275px] lg:w-[520px] lg:ml-2
                lg:relative lg:top-10 lg:right-14 shadow-2xl rounded-md z-30
                "></img>
                </div>
                </Link>





                <Link href="Italian">
                <div className="group mb-4 lg:mb-0 relative">
                <div className="lg:rounded-md lg:group-hover:bg-black lg:w-[295px] lg:text-center lg:left-[-56px] lg:relative lg:bottom-[-295px]">
                        <p className="text-transparent lg:group-hover:text-white">Italian</p>
                    </div>

                    <img src="/ItalianElements/ITF1.jpg" className="lg:h-[275px] lg:w-[520px] ml-2
                lg:relative lg:right-20 z-20
                shadow-2xl rounded-md
                "></img>
                </div>
                </Link>
            </div>
       
        </div>
    )
}

export default HomeMiddle