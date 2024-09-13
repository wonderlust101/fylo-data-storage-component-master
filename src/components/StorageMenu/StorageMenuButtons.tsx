import React from "react";

type StorageMenuButtonsProps = {
    label: string;
    location: string;
    icon: string;
}

export default  function StorageMenuButtons({label, location, icon}: StorageMenuButtonsProps):React.JSX.Element {

    return (
        <a href={location}>
            <img className='storage-menu__icon' src={icon} alt="" aria-label={`Go to ${label}`}/>
        </a>)
}