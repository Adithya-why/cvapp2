import React from "react";
//import logo from './logo.svg'



class TopBar extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="bar">
                <h1>CV Generator</h1>
            </div>
        )
    }
}

export default TopBar;