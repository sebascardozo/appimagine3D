import { Waveform } from '@uiball/loaders'
import '../styles/loader.css'


function Loader() {
  return (
    <div className='loader'>
        <Waveform 
           size={40}
           lineWeight={3.5}
           speed={1} 
          color="black" 
        />
  </div>
  )
}

export default Loader