import React from "react";

export default function Sourcing() {
    const style = {
        color: '#1DB954',
        // fontWeight: 'bold'
    };
    const mailStyle = {
        color: '#1DB954',
        textDecoration: 'none'
    }
    return (
        <div className="table-responsive">
        <h2 style={style}> Labs in LBG</h2>
        <table className="table table-dark table-hover ">
        <thead style={style}>
        <tr>
            <th>Sender</th>
            <th>Recieved through</th>
            <th>Recieved Date</th>
            <th>Evaluated By</th>
            <th>Recieved By</th>
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
            <td className="bg-success">Profile Accepeted</td>
        </tr>
        <tr>
            <td> HR </td>
            <td> <a href="mailto:abc@gmail.com" style={mailStyle}>Email</a></td>
            <td> External Profile </td>
            <td> 27/09/2021 </td>
            <td> HR </td>
            <td> 01/10/2021 </td>
            <td> I have moved the profile to next steps </td>
            <td className="bg-success">Profile Accepeted</td>
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
            <td className="bg-success">Profile Accepeted</td>
        </tr>
        <tr>
            <td> HR </td>
            <td> <a href="mailto:abc@gmail.com" style={mailStyle}> Email </a></td>
            <td> External Profile </td>
            <td> 27/09/2021 </td>
            <td> HR </td>
            <td> 01/10/2021 </td>
            <td> I have moved the profile to next steps </td>
            <td className="bg-success">Profile Accepeted</td>
        </tr>
        </tbody>
        </table>
        </div>
    )
}