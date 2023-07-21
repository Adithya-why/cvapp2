import React from "react";
import { v4 as uuidv4 } from 'uuid';

//this component gets infor from state and renders the actual cv
class CvInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        //gets the state as a prop and extracts information
        //personal details
        let name = this.props.info.data.name;
        let country = this.props.info.data.country;
        let address = this.props.info.data.address;
        let email = this.props.info.data.email;
        let phone = this.props.info.data.phone;
        

        let eduData = this.props.info.eduData;

        let n = this.props.info.n;
        let res = [];
       //gets edudata witb n values, meaning n counts of edudata were entered
       //pushes elements to array to to be displayed
        for(let i = 1;i<=n;i++){
            let obj = eduData[i];
            if(obj){
            res.push(<div key={uuidv4()}>{obj['sch']}</div>);
            res.push(<div key={uuidv4()}>{obj['title']}</div>);
            res.push(<div key={uuidv4()}>{obj['dos']}</div>);
            }
        }
        

        //same as above but for exp
        let expData = this.props.info.expData;
        let ex = this.props.info.ex;

        let eres = [];

        for(let j = 1;j<=ex;j++){
            let obj = expData[j];
            if(obj){
            eres.push(
            <div>
                            <li>
                                <div key={uuidv4()} className="cnimp">{obj['cm']}</div>
                            </li>
                            <li>
                                <div key={uuidv4()}>{obj['tt']}</div>
                            </li>
                            <li>
                                <div key={uuidv4()}>{obj['res']}</div>
                            </li>
                            <li>
                                <div key={uuidv4()}>{obj['dow']}</div>
                                            
                            </li>

                        </div>
            );
            }
        }

       

        

        
        return(
            <div className="cv" id="cv">

                <h1>Curriculum Vitae</h1>
            <div className="pd">
                <div><h1>{name}</h1></div>

                <h3>{address} • {country} • {'+91 ' + phone} • {email}</h3>
                
            </div>


            <h3 className="eduh">Education</h3>
            <div className="cedu">
                <div className="edut">School Name</div>
                <div className="edut">Title of study</div>
                <div className="edut">Date of study</div>

                {
                res.map((edu)=>{
                    return <div>{edu}</div>;
                })}
                
            </div>
            <h3 className="eduh">Experience</h3>
            <div className="expc">


            {
                eres.map((ere)=>{
                    return <div className="expJobs"><ul>{ere}</ul></div>;
                })}
            </div>
            </div>
        )
    }
}

export default CvInfo;