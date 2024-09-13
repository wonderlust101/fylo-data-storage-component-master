import React from "react";
import StorageMenu from "./components/StorageMenu/StorageMenu.tsx";
import StorageMenuButtons from "./components/StorageMenu/StorageMenuButtons.tsx";
import StorageIndicator from "./components/StorageIndicator/StorageIndicator.tsx";

export default function App(): React.JSX.Element {

    return (
        <main className='storage-page'>
            <StorageMenu>
                <StorageMenuButtons label='Documents' location="#" icon="/src/assets/images/icon-document.svg"/>
                <StorageMenuButtons label="Folder" location="#" icon="/src/assets/images/icon-folder.svg"/>
                <StorageMenuButtons label="Upload" location="#" icon="/src/assets/images/icon-upload.svg"/>
            </StorageMenu>
            <StorageIndicator totalStorage={1000} usedStorage={815}/>
        </main>
)
}

