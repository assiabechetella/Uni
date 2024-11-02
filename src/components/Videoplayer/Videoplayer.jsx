import React ,{useRef} from 'react'
import './Videoplayer.css'
import vid from '../../assets/vid.mp4'

const Videoplayer = ({playState, setPlayerState}) => {

    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayerState(false)
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}` } ref={player}
      onClick={closePlayer}>
      <video src={vid} autoPlay controls></video>
    </div>
  )
}

export default Videoplayer
