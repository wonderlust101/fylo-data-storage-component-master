import React from "react";
import StorageMenu from "./components/StorageMenu/StorageMenu.tsx";
import StorageMenuButtons from "./components/StorageMenu/StorageMenuButtons.tsx";
import StorageIndicator from "./components/StorageIndicator/StorageIndicator.tsx";
import DocumentsIcon from "/images/icon-document.svg";
import FolderIcon from "/images/icon-folder.svg";
import UploadIcon from "/images/icon-upload.svg";

export default function App(): React.JSX.Element {

    return (
        <main className='storage-page'>
            <StorageMenu>
                <StorageMenuButtons label='Documents' location="#" icon={DocumentsIcon}/>
                <StorageMenuButtons label="Folder" location="#" icon={FolderIcon}/>
                <StorageMenuButtons label="Upload" location="#" icon={UploadIcon}/>
            </StorageMenu>
            <StorageIndicator totalStorage={1000} usedStorage={815}/>
        </main>
)
}

