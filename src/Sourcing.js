import React from "react";
import './index.css';
import AddDetails from './AddDetails';
import Sample from "./Sample";
import Form from "./Form";

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
            {/* <Sample /> */}
            <Form />
            
        </div>
        <table className="table table-dark table-hover text-center">
        <thead className="table-active">
        <tr>
            <th>Sender</th>
            <th>Recieved through</th>
            <th>Source</th>
            <th>Recieved Date</th>
            <th>Evaluated By</th>
            <th>Evaluated Date</th>
            <th>Final Feedback</th>
            <th>Next Steps</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td> HR </td>
            <td > <a href="mailto:abc@gmail.com" style={mailStyle}>Email</a></td>
            <td> External Profile </td>
            <td> 27/09/2021 </td>
            <td> HR </td>
            <td> 01/10/2021 </td>
            <td> I have moved the profile to next steps </td>
            <td className="bg-success">Profile Accepted</td>
        </tr>
        <tr>
            <td> HR </td>
            <td> <a href="mailto:abc@gmail.com" style={mailStyle}>Email</a></td>
            <td> LinkedIn </td>
            <td> 27/09/2021 </td>
            <td> HR </td>
            <td> 01/10/2021 </td>
            <td> I have moved the profile to next steps </td>
            <td className="bg-success">Profile Accepted</td>
        </tr>
        <tr>
            <td> HR </td>
            <td> <a href="mailto:abc@gmail.com" style={mailStyle}>Email</a></td>
            <td> External Profile </td>
            <td> 29/09/2021 </td>
            <td> HR </td>
            <td> 03/10/2021 </td>
            <td> I have made this profile in pending stage </td>
            <td className="bg-warning">Processing the application</td>
        </tr>
        <tr>
            <td> HR </td>
            <td> <a href="mailto:abc@gmail.com" style={mailStyle}>Email</a></td>
            <td> External Profile </td>
            <td> 01/10/2021 </td>
            <td> HR </td>
            <td> 15/10/2021 </td>
            <td> There are some data need to recieved  </td>
            <td className="bg-warning">Processing the application</td>
        </tr>
        <tr>
            <td> HR </td>
            <td> <a href="mailto:abc@gmail.com" style={mailStyle}>Email </a></td>
            <td> External Profile </td>
            <td> 10/09/2021 </td>
            <td> HR </td>
            <td> 20/10/2021 </td>
            <td> I have moved the profile to next steps </td>
            <td className="bg-success">Profile Accepted</td>
        </tr>
        <tr>
            <td> HR </td>
            <td> <a href="mailto:abc@gmail.com" style={mailStyle}> Email </a></td>
            <td> External Profile </td>
            <td> 27/09/2021 </td>
            <td> HR </td>
            <td> 01/10/2021 </td>
            <td> I have moved the profile to next steps </td>
            <td className="bg-success">Profile Accepted</td>
        </tr>
        </tbody>
        </table>
        </div>
    </>
    )
}