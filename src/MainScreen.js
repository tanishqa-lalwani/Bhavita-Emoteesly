import React from 'react';
import {Instagram,Facebook,GitHub,Twitter,LinkedIn} from '@material-ui/icons';
import './MainScreen.css'
function MainScreen(props) {
    return (
        <div className = "main__screen">
            <div className = "main__info">
            <div className = "main__title">
                <h2  >Hi, I am  </h2>
                <h2 className = "title__effect ">Bhavita</h2>
            </div>

            <div className = "text__container">
                    <h2 className = "text__effect title__delete"> Scroll down for more..</h2>
            </div>
            <div className = "main__icons">
                {/* <div className = "container">
                <Instagram className = "insta__icon" fontSize = "large"/>
                <div className = "insta__loader"></div>
                </div> */}
                <Instagram fontSize = "large"/>

                <Facebook fontSize = "large"/>
                <GitHub fontSize = "large"/>
                <Twitter fontSize = "large"/>
                <LinkedIn fontSize = "large"/>
                {/* <div className = "container">
                 <Instagram className = "insta" fontSize = "large"/>
                 </div>
                <Facebook  className = "fb"  fontSize = "large"/>
                <GitHub  className = "github" fontSize = "large"/>
                <Twitter className = "twitter" fontSize = "large"/>
                <LinkedIn  className = "linkedIn" fontSize = "large"/> */}
            </div>
            {/* <div className = "main__about">
                <div className = "main__about__title">
                    <h3>About Me</h3>
                </div>
                <div className = "main__about__content">
               <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. If you like this theme and want to use it for yourself, checkout the source code and the documentation at Github. You can also find me on JAMstack Themes and on Jekyll Themes.</p>
                </div>
            </div> */}
            </div>
        </div>
    );
}

export default MainScreen;