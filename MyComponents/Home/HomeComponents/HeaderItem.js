
import Link from 'next/link'
import Image from 'next/image'
import { HomeIcon } from '@heroicons/react/24/solid'
function HeaderItem({title,link,Icon,textcolors}) {
return (
    
    <div className="flex flex-col items-center cursor-pointer group w-16">

        <Link href={link}>
            <Icon className="h-[60px] w-[60px] mt-3 group-hover:animate-bounce animate-pulse group-hover:hidden text-[White]"/>
            <a href="#" className="lg:text-[30px] hidden group-hover:block group-hover:mt-[20px] font-extrabold " style={{color:textcolors}}>{title}</a>
        </Link>
       

        {/* <img src={imag} className="h-[76px] lg:mt-3 group-hover:animate-bounce animate-pulse group-hover:hidden">
        </img>
          */}
  
    </div>
    
   
    
)
}

export default HeaderItem
