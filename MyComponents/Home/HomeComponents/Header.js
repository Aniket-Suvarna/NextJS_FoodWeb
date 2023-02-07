import { HomeIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { IN, IT, MX, US } from 'country-flag-icons/react/3x2'


function Header() {
    return (
        <header className=""> 
            <div className="flex flex-grow justify-evenly">
                <HeaderItem title="Home" link="/" textcolors="purple" Icon={HomeIcon} />
                <HeaderItem title="Indian" link="Indian" textcolors="Orange" Icon={IN} />
                <HeaderItem title="Mexican" link="Mexican" textcolors="Red" Icon={MX} />
                <HeaderItem title="Italian" link="Italian" textcolors="Green" Icon={IT} />
                
            </div>

        </header>
    )
}

export default Header
