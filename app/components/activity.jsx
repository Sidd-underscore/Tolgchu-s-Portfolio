"use client"

export default function Activity(data) {
    data = data.activity;

    // match "https/raw.githubusercontent.com/LeonardSSH/vscord/main/assets/icons/jsx.png" from "mp:external/GPHL8W_XtMTU8f3iEmRNUPzeRN_Di6I-uR1PDclBts8/https/raw.githubusercontent.com/LeonardSSH/vscord/main/assets/icons/jsx.png" (the urls can be anything)
    let regex = /https(\/|:)[a-zA-Z0-9_\-\.\/]+/g;
    let largeImage = data.assets.largeImage ? data.assets.largeImage.match(regex)?.[0] : null;
    let smallImage = data.assets.smallImage ? data.assets.smallImage.match(regex)?.[0] : null;

    if (largeImage) largeImage = largeImage.replace('https/', 'https://');
    if (smallImage) smallImage = smallImage.replace('https/', 'https://');

    // timestamps are in milliseconds
    let elapsedHours = Math.floor((Date.now() - data.timestamps.start) / 1000 / 60 / 60).toString();
    let elapsedMinutes = (Math.floor((Date.now() - data.timestamps.start) / 1000 / 60) % 60).toString();
    let elapsedSeconds = (Math.floor((Date.now() - data.timestamps.start) / 1000) % 60).toString();

    if (elapsedHours.length === 1) elapsedHours = `0${elapsedHours}`;
    if (elapsedMinutes.length === 1) elapsedMinutes = `0${elapsedMinutes}`;
    if (elapsedSeconds.length === 1) elapsedSeconds = `0${elapsedSeconds}`;

    return (
        <div>
            <h5 className="profileTitle">{data.type === 2 ? 'LISTENING TO SPOTIFY' : 'PLAYING A GAME'}</h5>
            <div className="activityCard">
                <div className="activityImage">
                    <img className="activityLargeImage" src={data.type === 2 ? 'https://th.bing.com/th/id/R.3587f8e9df02e2990b93afb9cd6d2323?rik=pdu4Ha7cd%2ftwrg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fspotify-logo-png-spotify-music-app-icon-1024.jpg&ehk=an3w0ln31JOUxMDxW5d5y1NdJ87FxWd1D0Uid0Kc6xw%3d&risl=&pid=ImgRaw&r=0' : largeImage} />
                </div>
                <div className="activityInfo">
                    <p className="activityName">{data.name}</p>
                    <p className="activityDetails">{data.details}</p>
                    <p className="activityDetails">{data.state}</p>
                    <p className="activityDetails">{elapsedHours ? `${elapsedHours}:` : null}{elapsedMinutes ? `${elapsedMinutes}:` : null}{elapsedSeconds} elapsed</p>
                </div>
            </div>
        </div>
    );
};