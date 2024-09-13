import React, {ReactNode} from "react";
import Logo from '/src/assets/images/logo.svg';

type StorageMenuProps = {
    children?: ReactNode;
}

export default  function StorageMenu({children}: StorageMenuProps):React.JSX.Element {
    
    return (
        <div className='storage-menu'>
            <img className='storage-menu__logo' src={Logo} alt="" aria-label='Flyo'/>
            <div className='storage-menu__icons'>
                {children}
            </div>
        </div>)
}