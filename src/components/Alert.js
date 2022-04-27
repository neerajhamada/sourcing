import React from "react";

const Alert = ({ alert })=>{
    return (
        alert !== null  && (
            <div className={`alert alert-${alert.type} ${alert.msg.toLowerCase().includes('deleted')&&'position-fixed bottom-0 end-0 p-3'}`}>
                <i className='bi bi-info-circle-fill' /> {alert.msg}
            </div>
        )
    );
};

export default Alert