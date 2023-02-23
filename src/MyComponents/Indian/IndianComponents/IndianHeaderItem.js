import { HomeIcon,PhotoIcon,PencilSquareIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import IMIHeader from "../../IMIHeader";

function IndianHeaderItem() {
    return (
        <header> 
            <div className="flex flex-grow justify-evenly">
                <IMIHeader title="MainHome" link="/" Icon={HomeIcon} iconcolor="#ff8c00" textcolor="#ff8c00"/>
                <IMIHeader title="Home" link="/Indian" Icon={HomeIcon} iconcolor="#004cff" textcolor="#004cff"/>
                <IMIHeader title="Info" link="/IndianPages/IndianInfo" Icon={PencilSquareIcon} iconcolor="#00ff04" textcolor="#00ff04"/>
                
            </div>

        </header>
    )
}

export default IndianHeaderItem

