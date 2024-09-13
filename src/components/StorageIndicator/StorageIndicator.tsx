import React from "react";

type StorageIndicator = {
    totalStorage: number; // in GB
    usedStorage: number; // in GB
}

export default function StorageIndicator({totalStorage, usedStorage}: StorageIndicator): React.JSX.Element {
    let percentRemaining: number = usedStorage / totalStorage * 100;
    let storageRemaining: number = totalStorage - usedStorage;

    return (
        <section className="storage-indicator">
            <p>You’ve used <span className="bold">{usedStorage}</span> GB of your storage</p>

            <div className="storage-indicator__indicator">
                <div className="storage-indicator__bar">
                    <div className="storage-indicator__bar-fill" style={{width: `${percentRemaining}%`}}></div>
                    <div className="storage-indicator__dot" style={{left: `calc(${percentRemaining}% - 0.5rem)`}}></div>
                </div>

                <div className="storage-indicator__labels">
                    <p className="bold">0 GB</p>
                    <p className="bold">{totalStorage} GB</p>
                </div>
            </div>

            <div className="storage-indicator__status">
                <h2>{storageRemaining}</h2>
                <p className="storage-indicator__status-text">GB left</p>
            </div>
        </section>
    )
}