import React, { useEffect, useState } from 'react';
import EmoteeCard from './EmoteeCard';
import { BTTV } from './FetchApi';
import SearchIcon from '@material-ui/icons/Search';
import './TwitchEmotee.css'
function BttvEmotee() {
const [bttvemotees, setBttvemotees] = useState([])
const [bttvSearchEmotee, setBttvSearchEmotee] = useState([])


const [searchValue, setSearchValue] = useState("")

    const getBTTVEmotee =async () => {

        await BTTV().then(result => BTTV())
         .then(result=>{
           setBttvemotees(result)
         })
     }
     
     const findSearch = (input) => {
        setSearchValue(input)
        console.log(input)
        const bttv_2 = bttvemotees;
        console.log(bttv_2)

        const filtered = Object.entries(bttv_2).filter(bttv => {
          return bttv[0].toLowerCase().includes(input.toLowerCase())
        })
     
        let bttvSearch = {}
        for (let d of filtered) {
         let emote = d[0];
         bttvSearch[emote] = d[1];
     }
       setBttvSearchEmotee(bttvSearch)
    }
    useEffect(() => {
        getBTTVEmotee();
    }, [])
    return (
        <div className = "twitch__emotees__screen">
            <div className = "twitch__search">
            <input value = {searchValue} onChange = {(event)=>findSearch(event.target.value) } />
            <SearchIcon className = "search__icon" />
            </div>
            
            <div className = "emotees__cards">

            {
          Object.entries(searchValue?bttvSearchEmotee : bttvemotees).map(([bttvname,id]) => {
            return(
            <EmoteeCard  
            type = "bttv"
            imgid = {id}
            imgName = {bttvname}
            imgCode =
              {bttvname}
            />
            )
            
          })
            }
            </div>
        </div>
    );
}

export default BttvEmotee;