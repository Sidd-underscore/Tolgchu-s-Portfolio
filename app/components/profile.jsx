"use client"

import Activity from "./activity";

export default function Profile(data) {
    let customStatus = data.presence.activities.filter(activity => activity.type === 4)[0];

    return (
        <div className="profilePopout">
            <div className="profileCard">
                <img className="profileBanner" src="https://cdn.discordapp.com/banners/329671025312923648/a_9107695f3e64029cbe66ffcc6c0dd936?size=512" />
                <img className="profileAvatar" src="https://cdn.discordapp.com/avatars/329671025312923648/8e0e93898979c4104173e8793ae55dbf.webp?size=512" />
                <div className="profileBadges">
                    <img className="profileBadge" src="https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png" />
                    <img className="profileBadge" src="https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png" />
                    <img className="profileBadge" src="https://cdn.discordapp.com/badge-icons/996b3e870e8a22ce519b3a50e6bdd52f.png" />
                    <img className="profileBadge" src="https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png" />
                    <img className="profileBadge" src="https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png" />
                </div>
                <div className="profileInfo">
                    <p className="profileDisplayName">✨Tolgchu✨</p>
                    <p className="at">@<p className="profileUsername">tolgchu</p></p>
                    <p className="profilePronouns">he/cat</p>
                    {customStatus ? (
                        <p className="profileCustomStatus">{customStatus.emoji ? (
                            <img className="profileCustomStatusEmoji" src={customStatus.emoji} />
                        ) : null}{customStatus.state}</p>
                    ) : null}
                    <div className="profileDivider" />
                    <h5 className="profileTitle">DISCORD MEMBER SINCE</h5>
                    <p className="profileDate">Jun 28, 2017</p>
                    {data.presence.activities.filter(activity => activity.type !== 4).map((activity) => (
                        <Activity activity={activity} />
                    ))}
                </div>
            </div>
        </div>
    );
};