import React from "react";



class ExpPro extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        return(
            <div className="expinfo">
            <div className="expnfo">
                <label htmlFor="cm">Comapany Name</label>
                <input type="text" onBlur={this.props.changeHandler} className={'cm'} id="cm"></input>
            </div>

            <div>
                <label htmlFor="tt">Job title</label>
                <input type="text" onChange={this.props.changeHandler} className={"tt"} id="tt"></input>
            </div>

            <div>
                <label htmlFor="res">Responsibility</label>
                <input type="text" onChange={this.props.changeHandler} className={"res"} id="res"></input>
            </div>

            <div>
                <label htmlFor="dow">Date of Work</label>
                <input type="date" onChange={this.props.changeHandler} className={"dow"} id="dow"></input>
            </div>

            <button onClick={this.props.buttonHandler}>Submit</button>

           
            </div>
        )
    }
}

export default ExpPro;