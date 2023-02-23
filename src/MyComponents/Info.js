import React from 'react'

function Info({fn,colorfn,mn,colormn,colorln,ln,img,img2,cont,his,intr,title1,title2}) {
  return (
    <div>
      <div className='lg:grid lg:gap-x-[200px] grid-cols-2 text-[12px] ml-[15px] lg:text-[18px]'>
        <div>

          <div className='text-[120px]'>
            <div className='lg:absolute text-center lg:text-left'>
              <b style={{color:colorfn}}>{fn}</b>
              <b style={{color:colormn}}>{mn}</b>
              <b style={{color:colorln}}>{ln}</b>
              <img src={img} className=' lg:relative top-[-200px] z-[-2] w-[840px] opacity-[0.5] h-[835px]' ></img>
            </div>


          </div>
        </div>
        <img src={img2}></img>

        <div className='text-[20px] lg:w-[840px] lg:mt-[20px]  bg-orange-100 bg-opacity-[0.7]'>
         {cont}
        </div>

        <div className='text-[20px] top-[20px]  mt-[20px]  bg-orange-100 bg-opacity-[0.7]'>
          <div className='text-[30px] font-bold text-[#db843d]'>
            {title1}
          </div>
          {his}
        </div>

      </div>

      <div className='ml-[16px] bg-orange-50 bg-opacity-[0.7]'>
        <div className='text-[30px] font-bold text-[#db843d]'>
          {title2}
        </div>
        {intr}
      </div>
    </div>
  )
}

export default Info