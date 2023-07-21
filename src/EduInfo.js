import React from "react";

//this component lets you add educational qualifications
class EduInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        
        return(
            <div className="eduinfo">
            <div className="einfo">
                <label htmlFor="sch">School Name</label>
                <input type="text" onBlur={this.props.changeHandler} className={'sch'} id="sch"></input>
            </div>

            <div>
                <label htmlFor="title">Title of study</label>
                <input type="text" onChange={this.props.changeHandler} className={"title"} id="title"></input>
            </div>

            <div>
                <label htmlFor="dos">Date of study</label>
                <input type="date" onChange={this.props.changeHandler} className={"dos"} id="dos"></input>
            </div>

            <button onClick={this.props.buttonHandler}>Submit</button>

           
            </div>
        )
    }
}


export default EduInfo;