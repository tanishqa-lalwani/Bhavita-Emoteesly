import React, { useEffect, useState } from 'react';
import EmoteeCard from './EmoteeCard';
import { Twitch } from './FetchApi';
import SearchIcon from '@material-ui/icons/Search';
import Fade from 'react-reveal/Fade';

import './TwitchEmotee.css'
function TwitchEmotee({checkData}) {
const [twitchemotes, setTwitchemotes] = useState([])
const [searchValue, setSearchValue] = useState("")

    const getTwitchEmotee =async () => {
        await Twitch().then(result => Twitch())
         .then(result=>{
           setTwitchemotes(result)
         })
         console.log(twitchemotes)
     }
     
     const findSearch = (event) => {
        const input = event.target.value;
      const filtered = Object.entries(twitchemotes).filter(twitch => {
        return twitch[0].toLowerCase().includes(input.toLowerCase())
      })
   
      let twitchSearch = {}
      for (let emote of filtered) {
        if (emote[0].match(/^[a-zA-Z0-9]+$/)) {
            twitchSearch[emote[0].toLowerCase()] = emote[1];
        }
    }
     setSearchValue(input)
     setTwitchemotes(twitchSearch)
    }
    useEffect(() => {
       getTwitchEmotee();
       twitchemotes?checkData(true) : checkData(false)
    }, [])
    return (
        <div className = "twitch__emotees__screen">
            <div className = "twitch__search">
            <input value = {searchValue} onChange = {findSearch } />
            <SearchIcon className = "search__icon" />
            </div>
          
            <div className = "emotees__cards">
            {
            Object.entries(twitchemotes).map(([twitchemote,id]) => {
              return(
              <EmoteeCard  
              type = "twitch"
              imgid = {id}
              imgName = {twitchemote}
              imgCode =
                {twitchemote}
              />
              )}) 
            }
            </div>
        </div>
    );
}

export default TwitchEmotee;