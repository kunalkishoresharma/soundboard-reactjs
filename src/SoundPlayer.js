import { useState } from "react";

const SoundPlayer = ({
    url,
    emoji,
    title
})=>{
    const [audio] = useState(new Audio(url));

    const playSound =()=>{
        audio.currentTime = 0;
        audio.play();
    }

    return(
        <div className="sound-button" role="button"  onClick={playSound} tabIndex="0" aria-label={title}>
            <span className="sound-emoji" aria-hidden="true">{emoji}</span>
        </div>
    )
}

export default SoundPlayer;