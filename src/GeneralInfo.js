import React from "react";

//this component getd d=general data and updates the parent state
class GeneralInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        //change handler updates state varibale
        //button handler stores those object in data object in state

        
        return(
            <div className="ginfo">
            <h2>Personal Information</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={this.props.changeHandler} className="name" id="name"></input>
            </div>

            <div>
                <label htmlFor="country">Country</label>
                <input type="text" onChange={this.props.changeHandler} className="country" id="country"></input>
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <textarea onChange={this.props.changeHandler} className="address" id="address"></textarea>
            </div>

            
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={this.props.changeHandler} className="email" id="email"></input>
            </div>

            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" onChange={this.props.changeHandler} className="phone" id="phone"></input>
            </div>

            <button onClick={this.props.buttonHandler} className="gbtn">Submit</button>

            
            </div>
        )
    }
}

export default GeneralInfo;