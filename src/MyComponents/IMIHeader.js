import Link from 'next/link'
import Image from 'next/image'
function IMIHeader({ Icon, title, link, iconcolor, textcolor }) {
    return (

        <div className="flex flex-col items-center cursor-pointer group w-16">
            <Link href={link}><Icon className="h-[60px] w-[60px] mt-3 group-hover:animate-bounce animate-pulse group-hover:hidden" style={{ color: iconcolor }} />
                <a href="#" className="text-[30px] hidden group-hover:block group-hover:mt-[15px] font-extrabold" style={{ color: textcolor }}>{title}</a></Link>


        </div>



    )
}

export default IMIHeader
