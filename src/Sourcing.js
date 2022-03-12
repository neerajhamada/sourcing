import React, { useEffect, useState } from "react";
import './index.css';
import AddDetails from './AddDetails';
import Sample from "./Sample";
import Form from "./Form";
import axios from "axios";

export default function Sourcing() {
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
        <div className="table-responsive">
        <h2 style={style} className="text-center">Sourcing Status</h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            {/* <AddDetails /> */}
            <Sample />
            {/* <Form /> */}
            
        </div>
        <table className="table table-dark table-bordered table-hover text-center m-3 shadow " >
        <thead className="table-active text-nowrap">
        <tr>
            <th>S.NO</th>
            <th>Source</th>
            <th>Location</th>
            <th>Recieved via</th>
            <th>Internal/External</th>
            <th>Recieved Date</th>
            <th>Lab</th>
            <th>Sent For Evaluation On</th>
            <th>Recieved Evaluation On</th>
            <th>Evaluation Pending (in days)</th>
            <th>Evaluated By</th>
            <th>Internal Evaluation Feedback</th>
            <th>Customer Evaluation</th>
            <th>Selection Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td> 1. </td>
            <td className="text-nowrap"> External EP </td>
            <td className="text-nowrap"> Off-shore </td>
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
            <td> Off-shore </td>
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
            <td> Off-shore </td>
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
            <td> Off-shore </td>
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
        
        </tbody>
        </table>
        </div>
    </>
    )
}