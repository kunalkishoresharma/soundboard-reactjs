import SoundPlayer from './SoundPlayer';
import kittenUrl from './sounds/meow.wav';
import kissUrl from './sounds/kiss.wav'

function App() {
  return (
    <div className="App">
      <div className="button-group">
         <SoundPlayer emoji="😽" url={kittenUrl} title="play" ></SoundPlayer>
         <SoundPlayer emoji="😙" url={kissUrl} title="kiss"></SoundPlayer>
       </div>
    </div>
  );
}

export default App;
