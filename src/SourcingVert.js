import React,{useState,useEffect} from "react";
import './index.css';
import Sample from "./Sample";


const SourcingVert = () =>{
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
    return(
    <>
        <div className="table-responsive">
        <h2 style={style} className="text-center">Sourcing Status</h2>
        <div className="d-grid d-md-flex justify-content-md-end">
            {/* <AddDetails /> */}
            <Sample />
            {/* <Form /> */}
            
        </div>
        <table className="table text-nowrap table-dark table-bordered m-3 table-hover text-center shadow">
        <thead className="table-bordered text-start">
        <tr>
            <th>S.NO</th>{data.map((details,index)=>{
                return <td>{index+1}</td>
            })} 
        </tr>
        <tr>
            <th>Source</th>{data.map((details)=>{
                return <td>{details.Source}</td>
            })} 
        </tr>
        <tr>
            <th>Location</th>{data.map((details)=>{
                return <td>{details.Location}</td>
            })} 
        </tr>
        <tr>
            <th>Received via</th>{data.map((details)=>{
                return <td>{details.Received_via}</td>
            })} 
        </tr>
        <tr>
            <th>Internal/External</th>{data.map((details)=>{
                return <td>{details.Internal_External}</td>
            })} 
        </tr>
        <tr>
            <th>Received Date</th>{data.map((details)=>{
                return <td>{details.Received_Date}</td>
            })} 
        </tr>
        <tr>
            <th>Lab</th>{data.map((details)=>{
                return <td>{details.Lab}</td>
            })} 
        </tr>
        <tr>
            <th>Sent For Evaluation On</th>{data.map((details)=>{
                return <td>{details.Sent_For_Evaluation_On}</td>
            })} 
        </tr>
        <tr>
            <th>Received Evaluation On</th>{data.map((details)=>{
                return <td>{details.Received_Evaluation_On}</td>
            })} 
        </tr>
        <tr>
            <th>Evaluation Pending</th>{data.map((details)=>{
                return <td>{(new Date(changeFormat(details.Received_Evaluation_On)) - new Date(changeFormat(details.Sent_For_Evaluation_On))) / (1000 * 60 * 60 * 24) + ' day(s)'}</td>
            })} 
        </tr>
        <tr>
            <th>Evaluated By</th>{data.map((details)=>{
                return <td>{details.Evaluated_By}</td>
            })} 
        </tr>
        <tr>
            <th>Internal Evaluation Feedback</th>{data.map((details)=>{
                return <td>{details.Internal_Evaluation_Feedback}</td>
            })} 
        </tr>
        <tr>
            <th>Customer Evaluation</th>{data.map((details)=>{
                return <td>{details.Customer_Evaluation}</td>
            })} 
        </tr>
        <tr>
            <th>Selection Status</th>{data.map((details)=>{
                return <td>{details.Selection_Status}</td>
            })} 
        </tr>

        </thead>
        </table>
        </div>
    </>
    )
}
export default SourcingVert;