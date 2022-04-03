import React from "react";

const Alert = ({ alert })=>{
    return (
        alert !== null  && (
            <div className={`alert alert-${alert.type} fade`}>
                <i className={alert.type === 'success' ? `bi bi-check-circle`: `bi bi-info-circle`} /> {alert.msg}
            </div>
        )
    );
};

export default Alert