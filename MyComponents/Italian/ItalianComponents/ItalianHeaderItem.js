import { HomeIcon,PhotoIcon,PencilSquareIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import IMIHeader from "../../IMIHeader";

function ItalianHeaderItem() {
    return (
        <header> 
            <div className="flex flex-grow justify-evenly">
                <IMIHeader title="MainHome" link="/" Icon={HomeIcon} iconcolor="#008C45" textcolor="#008C45"/>
                <IMIHeader title="Home" link="/Italian" Icon={HomeIcon} iconcolor="#cce2fc" textcolor="#cce2fc"/>
                <IMIHeader title="Info" link="/ItalianPages/ItalianInfo" Icon={PencilSquareIcon} iconcolor="#CD212A" textcolor="#CD212A"/>
                
            </div>

        </header>
    )
}

export default ItalianHeaderItem