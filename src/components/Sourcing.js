import React, { useEffect, useState } from "react";
import '../index.css'
import Sample from "./Sample";
import Filter from "./Filter";
import Download from "./Download";
import EditSupply from "./EditSupply";
import DeleteSupply from "./DeleteSupply";
import Alert from "./Alert";
// import AddDetails from './AddDetails';
// import Form from "./Form";
// import axios from "axios";
// import data from '../data.json'

export default function Sourcing() {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredResults,setFilteredResults] = useState([]);
    // const [searchedResults, setSearchedResults] = useState([]);
    // const [editEditSupplyId, setEditSupplyId] = useState(null);

    const [alert,setAlert] = useState(null);

    const showAlert = (msg,type) =>{
      setAlert({ msg , type })
      setTimeout(()=> {
        setTimeout(()=> {
          window.location.reload(false)
        },500)
        setAlert(null)
      },2000)
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilter = (filteredData) =>{
        setFilteredResults(filteredData)
    }


    useEffect(() => {
        fetch("http://localhost:7000/getSupply")
        .then((res) => res.json())
        .then((data) => setData(data));
    },[])
    
    useEffect(() => {
        if(searchTerm==='') {
            setFilteredResults(data)
        }
        const filtered = data.filter((item) => {  
            return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredResults(filtered)
    }, [searchTerm, data])


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
    
    return (
    <>
    {/* {data.map((details)=>{
        return <h1>{details.Source}</h1>
    })} */}
        <div className="table-responsive">
        <h2 style={style} className="text-center">Sourcing Status</h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end pe-3" >
            {/* <AddDetails /> */}
            {/* <Sample showAlert={showAlert} /> */}
            <Sample />
            <Download supplyData='getSupply' fileName='SupplyDetails' />
            {/* <Form /> */}
        </div>
        <div className="col-md-3">
        <div className="input-group mb-3 ms-3 col-6 mx-auto">
            <input type="search" className="form-control rounded" placeholder="Search..." aria-label="Search" aria-describedby="search-addon"
            value={searchTerm}
            onChange={handleChange}
            />
        <span className="input-group-text" id="search-addon">
            <i className="bi bi-search"></i>
        </span>
        </div>
        </div>
        <Alert alert={alert} />
        <table style={{fontSize:'11px'}} className="table table-sm table-responsive-sm table-dark table-bordered table-hover text-center shadow">
        <thead className="table-active align-middle">
        <tr>
            <th>S.NO</th>
            <th>Source 
            <Filter data={data} category={'Source'} handleFilter={handleFilter} />
            </th>
            <th>Location 
            <Filter data={data} category={'Location'} handleFilter={handleFilter} />
             </th>
            <th>Received via
            <Filter data={data} category={'Received_via'} handleFilter={handleFilter} />
            </th>
            <th>Internal/<br />External
            <Filter data={data} category={'Internal_External'} handleFilter={handleFilter} />
            </th>
            <th>Received Date
            <Filter data={data} category={'Received_Date'} handleFilter={handleFilter} />
            </th>
            <th>Lab
            <Filter data={data} category={'Lab'} handleFilter={handleFilter} />
            </th>
            <th>Sent For Evaluation On
            <Filter data={data} category={'Sent_For_Evaluation_On'} handleFilter={handleFilter} />
            </th>
            <th>Received Evaluation On
            <Filter data={data} category={'Received_Evaluation_On'} handleFilter={handleFilter} />
            </th>
            <th>Evaluation Pending</th>
            <th>Evaluated By</th>
            <th>Internal Evaluation Feedback</th>
            <th>Customer Evaluation</th>
            <th>Selection Status
            <Filter data={data} category={'Selection_Status'} handleFilter={handleFilter} />
            </th>
            <th>Update</th>
        </tr>
        </thead>
        <tbody>
            {filteredResults.length > 0 &&
            filteredResults.map((details,index)=>{ 
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{details.Source}</td>
                        <td>{details.Location}</td>
                        <td>{details.Received_via}</td>
                        <td>{details.Internal_External}</td>
                        <td>{changeFormat(details.Received_Date)} </td>
                        <td>{details.Lab}</td>
                        <td>{changeFormat(details.Sent_For_Evaluation_On)} </td>
                        <td>{changeFormat(details.Received_Evaluation_On)} </td>
                        <td>{(new Date(details.Received_Evaluation_On) - new Date(details.Sent_For_Evaluation_On)) / (1000 * 60 * 60 * 24) + ' day(s)'}</td>
                        <td>{details.Evaluated_By}</td>
                        <td>{details.Internal_Evaluation_Feedback}</td>
                        <td>{details.Customer_Evaluation}</td>
                        <td className={(details.Selection_Status === 'Selected' ? "bg-success" : 'bg-danger')}>{details.Selection_Status}</td>
                        <td><EditSupply data={data} _id={details._id} index={index} /><DeleteSupply showAlert={showAlert} data={data} _id={details._id} /></td>
                    </tr>
                )
            })
        }
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
        {!filteredResults.length>0 && <h5 className="text-center" style={{color:'#1DB954'}}>No Data Available</h5>}
        </div>
    </>
    )
}