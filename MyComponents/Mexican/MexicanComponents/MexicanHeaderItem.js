import { HomeIcon,PhotoIcon,PencilSquareIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import IMIHeader from "../../IMIHeader";

function MexicanHeaderItem() {
    return (
        <header> 
            <div className="flex flex-grow justify-evenly">
                <IMIHeader title="MainHome" link="/" Icon={HomeIcon} iconcolor="#006341" textcolor="#006341"/>
                <IMIHeader title="Home" link="/Mexican" Icon={HomeIcon} iconcolor="#fcfc9d" textcolor="#fcfc9d"/>
                <IMIHeader title="Info" link="/MexicanPages/MexicanInfo" Icon={PencilSquareIcon} iconcolor="#C8102E" textcolor="#C8102E"/>
                
            </div>

        </header>
    )
}

export default MexicanHeaderItem
