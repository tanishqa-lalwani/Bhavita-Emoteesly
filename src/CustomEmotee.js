import React, { useEffect, useState } from 'react';
import EmoteeCard from './EmoteeCard';
import { Custom } from './FetchApi';
import SearchIcon from '@material-ui/icons/Search';
import './TwitchEmotee.css'
function CustomEmotee() {
const [customEmotee, setCustomEmotee] = useState([])
const [customSearchEmotee, setCustomSearchEmotee] = useState([])


const [searchValue, setSearchValue] = useState("")

    const getCustomEmotee =async () => {

        await Custom().then(result => Custom())
         .then(result=>{
           setCustomEmotee(result)
         })
     }
     
     const findSearch = (input) => {
        setSearchValue(input)
        console.log(input)
        const custom_2 = customEmotee;

        const filtered = Object.entries(custom_2).filter(custom => {
          return custom[0].toLowerCase().includes(input.toLowerCase())
        })
        console.log(filtered)
        let customSearch = {}
        for(let emote of filtered){
          let w = {
            "id" :  emote[1].id,
            "ext" : emote[1].ext,
            "cat" : emote[1].cat
          }

          customSearch[emote[0]] = w;
        }
       setCustomSearchEmotee(customSearch)
    }
    useEffect(() => {
        getCustomEmotee();
    }, [])
    return (
        <div className = "twitch__emotees__screen">
            <div className = "twitch__search">
            <input value = {searchValue} onChange = {(event)=>findSearch(event.target.value) } />
            <SearchIcon className = "search__icon" />
            </div>
            
            <div className = "emotees__cards">
            {
          Object.entries(searchValue?customSearchEmotee : customEmotee).map(([customEmotee,value]) => {
              
            return(
            <EmoteeCard  
            type = "custom"
            imgid = {value.id}
            imgName = {customEmotee}
            imgCode =
              {customEmotee}
              ext = {value.ext}
                category = {value.cat}
            />
            )
            
          })
            }
            </div>
        </div>
    );
}

export default CustomEmotee;