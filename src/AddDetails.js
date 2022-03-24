import React from "react";
import { useForm } from 'react-hook-form';

import axios from 'axios';


export default function AddDetails () {
    const {register, handleSubmit,formState:{errors},reset,trigger} = useForm();

    // const onSubmit = (data) =>{
    //     const supplyDetails = {"data": data}
    //     // console.log(supplyDetails);
    //     axios.post('http://localhost:7000/addSupply', supplyDetails)
    //     window.location.reload(false);
    //     reset();
    //   };
    return (
        <div className="me-md-5">
            <button type="button" class="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Details
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enter Sourcing Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form>
            
                    <div className=' mx-auto text-center'>
                    <div className="form-floating mb-3">
                          
                          <input type="text" className="form-control  shadow border border-black rounded " id="sourcesender"  placeholder="Enter sender" {...register("sourcesender",{required:"sender is required"})} onKeyUp={() => { trigger("sourcesender");}}/>
                          <label htmlFor="sourcesender" className='d-inline'>Sender</label>
                          {errors.sourcesender && (<small className='text-danger'>{errors.sourcesender.message}</small>)}
                    </div>
              
                    <div className="form-floating mb-3">
                            <select  className="form-select"  {...register("received",{required:"received medium is required"})}>
                              <option value="email">Email</option>
                              <option value="teams">Teams</option>
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputReceived" name="received">Received from </label>
                    </div>
              
                    <div className="form-floating mb-3">
                          <input type="date" className="form-control  shadow border border-black rounded" id="sourcereceiveddate"  placeholder="Received Date" {...register("sourcereceiveddate",{required:"Received date is required"})} onKeyUp={() => { trigger("sourcereceiveddate");}}/>
                          <label htmlFor="sourcereceiveddate" className='d-inline'>Received Date</label>
                          {errors.sourcereceiveddate && (<small className='text-danger'>{errors.sourcereceiveddate.message}</small>)}
                    </div>
              
                    <div className="form-floating mb-3">
                            
                            
                            <select  className="form-select shadow border border-black rounded"  {...register("sourcesource",{required:"source is required"})}>
                            
                              <option value="Trainee">Trainee</option>
                              <option value="R2R">R2R</option>
                              <option value="externalprofile">External Profile</option>
                              <option value="BusinessAssociate">Business Associate</option>
                              <option value="LinkedIn">LinkedIn</option>
                              <option value="JobWebsite">Job Website</option>
                              <option value="TAG">TAG</option>
                              <option value="TD">TD</option>
                              <option value="HR">HR</option>
                              <option value="employees">Employees</option>
                              
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputsource" name="source">Source </label>
                    </div>
              
                    
              
                    <div className="form-floating mb-3">
                          
                          <input type="text" className="form-control  shadow border border-black rounded " id="source"  placeholder="Evaluated By " {...register("sourceevaluated",{required:"evaluator name is required"})} onKeyUp={() => { trigger("sourceevaluated");}}/>
                          <label htmlFor="sourceevaluated" className='d-inline'>Evaluated By</label>
                          {errors.sourceevaluated && (<small className='text-danger'>{errors.sourceevaluated.message}</small>)}
                    </div>
              
                    <div className="form-floating mb-3">
                          
                          <input type="date" className="form-control shadow border border-black rounded" id="sourceevaluateddate"  placeholder="Evaluated Date" {...register("sourceevaluateddate",{required:"Evaluated date is required"})} onKeyUp={() => { trigger("sourceevaluateddate");}}/>
                          <label htmlFor="sourceevaluatedddate">Evaluated Date</label>
                          {errors.sourceevaluateddate && (<small className='text-danger'>{errors.sourceevaluateddate.message}</small>)}
                    </div>
              
                    
                    <div className="form-floating mb-3">
                    
                          <textarea className="form-control  shadow border border-black rounded" id="Feedback"  placeholder=" Feedback" {...register("feedback",{required:"feedback is required"})} onKeyUp={() => { trigger("feedback");}}/>
                          <label htmlFor="feedback">Feedback</label>
                          {errors.feedback && (<small className='text-danger'>{errors.feedback.message}</small>)}
                            
                    </div>
                    <div className="form-floating mb-3">
                          
                          <input type="text" className="form-control" id="sourcenextsteps"  placeholder="Next steps" {...register("sourcenextsteps",{required:"next steps are  required"})} onKeyUp={() => { trigger("sourcenextsteps");}}/>
                          <label htmlFor="sourcenextsteps">Next steps</label>
                          {errors.sourcenextsteps && (<small className='text-danger'>{errors.sourcenextsteps.message}</small>)}
                    </div>
              
              
              
                    </div>
              
                    <div className="form-check">
                            <label className="form-check-label" htmlFor="Check2">I hereby declare that all the information given by me in this application is true and correct to the best of my knowledge and belief.</label>
                            <input type="checkbox" className="form-check-input" id="Check2" {...register("dec",{required:"Need to accept the Declaration"})}/>
                            
                            {errors.dec && (<small className='text-danger'>{errors.dec.message}</small>)}
                    </div><br/>
              
                          <div>
                          <input type="submit" className='btn btn-primary' value="Submit"/> 
                    </div>
              
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}