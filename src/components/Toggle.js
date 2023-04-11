import React, { Component } from 'react';
class Toggle extends Component {
    state = { 
        mode:"Light"
     } 
    render() { 

        var TogHandler=()=>{
            var i=0;
            var body=document.getElementById("body");
            var modename=document.getElementById("togname");
            var headtheme=document.getElementById("headline");
            var texttheme=document.getElementsByClassName("txt");
            var nav=document.getElementById("navbar");
            if(this.state.mode==="Light"){
                this.setState({mode:"Dark"})
            body.style.backgroundColor="#121212";
            modename.innerHTML="Dark";
            modename.style.color="white"
            headtheme.style.color="white"
            nav.style.backgroundColor="#192734"
            for(i=0;i<texttheme.length;i++)
                texttheme[i].style.color="white"
            }
            else{
                this.setState({mode:"Light"})
                body.style.backgroundColor="white";
                modename.innerHTML="Light";
                headtheme.style.color="black"
                modename.style.color="black"
                nav.style.backgroundColor="white"
                for(i=0;i<texttheme.length;i++)
                    texttheme[i].style.color="black"
            }
        }

        return (
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={TogHandler}/>
                <label id="togname" className="form-check-label" for="flexSwitchCheckDefault">Light</label>
            </div>
        );
    }
}
 
export default Toggle;