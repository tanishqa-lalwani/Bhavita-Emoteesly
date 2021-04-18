import { useEffect, useState } from 'react';
import './App.css';
import EmoteeCard from './EmoteeCard';
import {BTTV,Twitch,Custom} from './FetchApi'
import SearchIcon from '@material-ui/icons/Search';
import {Autocomplete} from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import MainScreen from './MainScreen';
import TwitchEmotee from './TwitchEmotee';
import BttvEmotee from './BttvEmotee';
import CustomEmotee from './CustomEmotee'
import {Instagram,Facebook,GitHub,Twitter,LinkedIn} from '@material-ui/icons';

const options = [
  { id: 0, value: "foo" },
  { id: 1, value: "goo" },
];

function App() {
 
  const [checkBttv, setCheckBttv] = useState(false)
  const [checktwitch, setCheckTwitch] = useState(false)
  const [checkcustom, setCheckCustom] = useState(false)


  const setTwitch = () =>{
    setCheckTwitch(true)  
    setCheckBttv(false)  
    setCheckCustom(false)

  }

  const setBTTV = () =>{
    setCheckTwitch(false)  
    setCheckBttv(true)  
    setCheckCustom(false)

  }

  const setCustom = () =>{
    setCheckTwitch(false)  
    setCheckBttv(false)  
    setCheckCustom(true)

  }


  

 
  // useEffect(() => {
  //   checkBttv == true? getBTTVEmotee() :  custom == true ? getCustomEmotee() :  getTwitchEmotee()
  
  // }, [searchValue])
  return (
    <div className="App">
      <div className = "app__screen">
      <MainScreen/>

      </div>
      <div className = "app__screen__about">
      <div className = "main__about__title">
                    <h3>About Me</h3>
                </div>
                <div className = "main__about__content">
               <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. If you like this theme and want to use it for yourself, checkout the source code and the documentation at Github. You can also find me on JAMstack Themes and on Jekyll Themes.</p>
                </div>
      </div>
      <div className = "app__emotees__section">
                    <h3 className = "app__emotees__section__title">EMOTEELY</h3>
                <div className = "app__emotees__tabs">
                  <h3 className = "app__emotees__tabs__single" onClick = {setBTTV} >BTTV EMOTTEES</h3>
                  <h3 className = "app__emotees__tabs__single" onClick = {setTwitch}>TWITCH EMOTTEES</h3>
                  <h3 className = "app__emotees__tabs__single" onClick = {setCustom  } >CUSTOM EMOTTEES</h3>
                

                </div>
              
                  {/* {
                    checkcustom?<CustomEmotee/>: checktwitch?<TwitchEmotee/>:<BttvEmotee/>
                  } */}
               
                
              
      </div>
      <div className = "contact">
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. If you like this theme and want to use it for yourself, checkout the source code and the documentation at Github.</p>
        <div className = "contact__icons">
                <Instagram className = "insta" fontSize = "large"/>
                <Facebook  className = "fb"  fontSize = "large"/>
                <GitHub  className = "github" fontSize = "large"/>
                <Twitter className = "twitter" fontSize = "large"/>
                <LinkedIn  className = "linkedIn" fontSize = "large"/>
            </div>
      </div>
     
       

      
     
    </div>
  );
}

export default App;
