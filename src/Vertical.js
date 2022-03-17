import React,{useState,useEffect} from "react";
import './index.css';
import Sample from "./Sample";


const Vertical = () =>{
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("../data.json")
        .then((res) => res.json())
        .then((data) => setData(data))
    },[])
    const changeFormat = (str) => {
        const date = str;
        const [day, month, year] = date.split('-');
        const result = [year, month, day].join('-');
        return result;
    }

    const style = {
        color: '#1DB954',
        fontWeight: 'bold',
        padding: '15px',
        margin: '5px'
    };
    const thStyle = {
        backgroundColor: '#121212',
        color: '#1DB954'
    }
    return(
    <>
        <div className="table-responsive">
        <h2 style={style} className="text-center">Sourcing Status</h2>
        <div className="d-grid d-md-flex justify-content-md-end">
            {/* <AddDetails /> */}
            <Sample />
            {/* <Form /> */}
            
        </div>
        <table style={{width:'50%'}} className="table text-nowrap table-dark table-bordered m-3 table-hover text-center shadow">
        <thead style={{borderWidth:"1px",
            borderColor: '#aaaaaa',
            borderStyle: 'solid'}}className="table-bordered text-start">
        <tr>
            <th style={thStyle}>S.NO</th>{data.map((details,index)=>{
                return <td>{index+1}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Source</th>{data.map((details)=>{
                return <td>{details.Source}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Location</th>{data.map((details)=>{
                return <td>{details.Location}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Received via</th>{data.map((details)=>{
                return <td>{details.Received_via}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Internal/External</th>{data.map((details)=>{
                return <td>{details.Internal_External}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Received Date</th>{data.map((details)=>{
                return <td>{details.Received_Date}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Lab</th>{data.map((details)=>{
                return <td>{details.Lab}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Sent For Evaluation On</th>{data.map((details)=>{
                return <td>{details.Sent_For_Evaluation_On}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Received Evaluation On</th>{data.map((details)=>{
                return <td>{details.Received_Evaluation_On}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Evaluation Pending</th>{data.map((details)=>{
                return <td>{(new Date(changeFormat(details.Received_Evaluation_On)) - new Date(changeFormat(details.Sent_For_Evaluation_On))) / (1000 * 60 * 60 * 24) + ' day(s)'}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Evaluated By</th>{data.map((details)=>{
                 return <td>{details.Evaluated_By}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Internal Evaluation Feedback</th>{data.map((details)=>{
                return <td>{details.Internal_Evaluation_Feedback}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Customer Evaluation</th>{data.map((details)=>{
                return <td>{details.Customer_Evaluation}</td>
            })} 
        </tr>
        <tr>
            <th style={thStyle}>Selection Status</th>{data.map((details)=>{
                return <td>{details.Selection_Status}</td>
            })} 
        </tr>

        </thead>
        </table>
        </div>
    </>
    )
}
export default Vertical;