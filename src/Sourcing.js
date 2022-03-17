import React, { useEffect, useState } from "react";
import './index.css';
import AddDetails from './AddDetails';
import Sample from "./Sample";
import Form from "./Form";
import axios from "axios";
// import data from '../data.json'

export default function Sourcing() {
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
    const mailStyle = {
        color: '#1DB954',
        fontWeight: 'bold'
    };
    return (
    <>
    {/* {data.map((details)=>{
        return <h1>{details.Source}</h1>
    })} */}
        <div className="table-responsive">
        <h2 style={style} className="text-center">Sourcing Status</h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            {/* <AddDetails /> */}
            <Sample />
            {/* <Form /> */}
            
        </div>
        <table className="table table-dark table-bordered table-hover text-center shadow">
        <thead className="table-active align-middle">
        <tr>
            <th>S.NO</th>
            <th>Source</th>
            <th>Location</th>
            <th>Received via</th>
            <th>Internal/<br />External</th>
            <th>Received Date</th>
            <th>Lab</th>
            <th>Sent For Evaluation On</th>
            <th>Received Evaluation On</th>
            <th>Evaluation Pending</th>
            <th>Evaluated By</th>
            <th>Internal Evaluation Feedback</th>
            <th>Customer Evaluation</th>
            <th>Selection Status</th>
        </tr>
        </thead>
        <tbody>
            {data.map((details,index)=>{
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{details.Source}</td>
                        <td>{details.Location}</td>
                        <td > <a href="mailto:abc@gmail.com" style={mailStyle}>{details.Recieved_via}</a></td>
                        <td>{details.Internal_External}</td>
                        <td>{details.Recieved_Date} </td>
                        <td>{details.Lab}</td>
                        <td>{details.Sent_For_Evaluation_On} </td>
                        <td>{details.Recieved_Evaluation_On} </td>
                        <td>{(new Date(changeFormat(details.Recieved_Evaluation_On)) - new Date(changeFormat(details.Sent_For_Evaluation_On))) / (1000 * 60 * 60 * 24) + ' day(s)'}</td>
                        <td>{details.Evaluated_By}</td>
                        <td>{details.Internal_Evaluation_Feedback}</td>
                        <td>{details.Customer_Evaluation}</td>
                        <td className={(details.Selection_Status==="Profile Accepted" ? "bg-success" : 'bg-danger')}>{details.Selection_Status}</td>
                    </tr>
                    
                )
            })}
        </tbody>
        {/* <tbody>
        <tr>
            <td> 1. </td>
            <td className="text-nowrap"> External EP </td>
            <td className="text-nowrap"> Offshore </td>
            <td > <a href="mailto:abc@gmail.com" style={mailStyle}>Email</a></td>
            <td> External </td>
            <td> 27-09-2021 </td>
            <td> Loans </td>
            <td> 01-10-2021 </td>
            <td> 03-10-2021 </td>
            <td> 2 </td>
            <td> HR </td>
            <td> I have moved the profile to next steps </td>
            <td> The profile is accepted </td>
            <td className="bg-success">Profile Accepted</td>
        </tr>
        <tr>
            <td> 2. </td>
            <td> External EP </td>
            <td> Offshore </td>
            <td > <a href="mailto:abc@gmail.com" style={mailStyle}>Email</a></td>
            <td> External </td>
            <td> 29-09-2021 </td>
            <td> OIE </td>
            <td> 03-10-2021 </td>
            <td> 05-10-2021 </td>
            <td> 2 </td>
            <td> HR </td>
            <td> I have moved the profile to next steps </td>
            <td> The profile is accepted </td>
            <td className="bg-success">Profile Accepted</td>
        </tr>
        <tr>
            <td> 3. </td>
            <td> External EP </td>
            <td> Offshore </td>
            <td > <a href="mailto:abc@gmail.com" style={mailStyle}>Email</a></td>
            <td> External </td>
            <td> 01-10-2021 </td>
            <td> Loans </td>
            <td> 05-10-2021 </td>
            <td> 10-10-2021 </td>
            <td> 5 </td>
            <td> HR </td>
            <td> Profile did not satisfy our needs</td>
            <td> The profile is rejected </td>
            <td className="bg-danger">Profile Rejected</td>
        </tr>
        <tr>
            <td> 4. </td>
            <td> External EP </td>
            <td> Offshore </td>
            <td > <a href="mailto:abc@gmail.com" style={mailStyle}>Email</a></td>
            <td> External </td>
            <td> 27-09-2021 </td>
            <td> Loans </td>
            <td> 01-10-2021 </td>
            <td> 03-10-2021 </td>
            <td> 2 </td>
            <td> HR </td>
            <td> I have moved the profile to next steps </td>
            <td> The profile is accepted </td>
            <td className="bg-success">Profile Accepted</td>
        </tr>
        
        </tbody> */}
        </table>
        </div>
    </>
    )
}