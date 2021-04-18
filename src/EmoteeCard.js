import React, { useState } from 'react';
import './EmoteeCard.css'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
function EmoteeCard({type,imgid,imgName,imgCode,ext,category}) {
    const [copied, setCopied] = useState(false)
    
    const copyToClipBoard = async(code) => {
        try {
            await navigator.clipboard.writeText(imgName);
            setCopied(true);
            const text = await navigator.clipboard.readText();
            console.log('Pasted text: ', text);
          } catch (err) {   
            setCopied(false);
          }
    }
    return (
        <div className = "card"  >
            <div className = "card__image">
                {
                    type === "twitch" ? (<img className="emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"  src={`https://static-cdn.jtvnw.net/emoticons/v1/${imgid}/3.0`} alt = "amotee"/> ) :
                   type === "custom" ? (<img classname="emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"  src={`https://cdn.jsdelivr.net/gh/bhavita/YTStreamChat/assets/emotes/${category}/${imgid}.${ext}`} />)
                    :(<img className="emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"  src={`https://cdn.betterttv.net/emote/${imgid}/3x`} alt = "amotee"/>  )           
         

                }

            </div>
            <div className = "card__name">
            <h3>{imgName}</h3>
                <div className = "card__name__copy" onClick = {copyToClipBoard}>
                    <h4>{imgCode}</h4>
                    <FileCopyOutlinedIcon className = "copy__icon" />
                </div>
            </div>
            
        </div>
    );
}

export default EmoteeCard;