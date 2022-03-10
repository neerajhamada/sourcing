import React from "react";
import { useForm } from 'react-hook-form';

import axios from 'axios';


export default function Sample () {
    const {register, handleSubmit,formState:{errors},reset,trigger} = useForm();
    // const onSubmit = (data) =>{
    //     const employeeDetails = {"data": data}
    //     axios.post('http://localhost:7000/insertdata', employeeDetails)
    //     window.location.reload(false);
    //     reset();
    //   };
    return (
        <div className="me-md-5">
            <button type="button" class="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Details
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog fs-5.5 fst-sans-serif">
                <div class="modal-content mx-auto ">
                <div class="modal-header">
                    <h5 class="modal-title w-100 fw-bold text-center" id="exampleModalLabel">Enter Sourcing  Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form>
                <div className='mx-auto text-center'>
                    <div className="form-floating mb-3">
                          
                          <input type="text" className="form-control  shadow border border-black rounded " id="sourcesource"  placeholder="Enter Source" {...register("sourcesource",{required:"source is required"})} onKeyUp={() => { trigger("sourcesource");}}/>
                          <label htmlFor="sourcesource" className='d-inline'>Source</label>
                          {errors.sourcesource && (<small className='text-danger'>{errors.sourcesource.message}</small>)}
                    </div>
        
                    <div className="form-floating mb-3">
                            <select  className="form-select"  {...register("location",{required:"location is required"})}>
                              <option value="onshore">On-shore</option>
                              <option value="offshore">Off-shore</option>
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputlocation" name="location">Location </label>
                    </div>

                    <div className="form-floating mb-3">
                            <select  className="form-select"  {...register("receivedvia",{required:"received via is required"})}>
                              <option value="knowme">Knowme</option>
                              <option value="linkedin">LinkedIn</option>
                              <option value="externalprofile">External Profile</option>
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputreceivedvia" name="receivedvia">Received Via</label>
                    </div>

                    <div className="form-floating mb-3">
                            <select  className="form-select"  {...register("internalexternal",{required:"internal/external is required"})}>
                              <option value="internal">Internal</option>
                              <option value="external">External</option>
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputinternalexternal" name="internalexternal">Internal/External</label>
                    </div>
        
                    <div className="form-floating mb-3">
                          <input type="date" className="form-control  shadow border border-black rounded" id="sourcereceiveddate"  placeholder="Received Date" {...register("sourcereceiveddate",{required:"Received date is required"})} onKeyUp={() => { trigger("sourcereceiveddate");}}/>
                          <label htmlFor="sourcereceiveddate" className='d-inline'>Received Date</label>
                          {errors.sourcereceiveddate && (<small className='text-danger'>{errors.sourcereceiveddate.message}</small>)}
                    </div>
        
                    <div className="form-floating mb-3">
                            
                            <select  className="form-select shadow border border-black rounded"  {...register("sourcelab",{required:"lab is required"})}>
                            
                              <option value="cards">Cards</option>
                              <option value="loans">Loans</option>
                              <option value="banking">Banking</option>
                              <option value="savings">Savings</option>
                              <option value="oie">OIE</option>
                              <option value="personalisation">Personalisation</option>
                              <option value="digicomms">DIGI COMMS</option>
                              <option value="doc.services">DOC. SERVICES</option>
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputlab" name="lab">Lab </label>
                    </div>
        
                    <div className="form-floating mb-3">
                          
                          <input type="date" className="form-control shadow border border-black rounded" id="sourcesentforevaluationon"  placeholder="Sent for Evaluation Date" {...register("sourcesentforevaluationon",{required:"Sent for Evaluation date is required"})} onKeyUp={() => { trigger("sourcesentforevaluationon");}}/>
                          <label htmlFor="sourceevaluatedddate">Sent for Evaluation On</label>
                          {errors.sourcesentforevaluationon && (<small className='text-danger'>{errors.sourcesentforevaluationon.message}</small>)}
                    </div>

                    <div className="form-floating mb-3">
                          
                          <input type="date" className="form-control shadow border border-black rounded" id="sourcereceivedevaluationon"  placeholder="Received Evaluation Date" {...register("sourcereceivedevaluationon",{required:"Received Evaluation date is required"})} onKeyUp={() => { trigger("sourcereceivedevaluationon");}}/>
                          <label htmlFor="sourcereceivedevaluatedddate">Received Evaluation On</label>
                          {errors.sourcereceivedevaluationon && (<small className='text-danger'>{errors.sourcereceivedevaluationon.message}</small>)}
                    </div>

                    <div className="form-floating mb-3">
                          
                          <input type="text" className="form-control  shadow border border-black rounded " id="sourceevaluatedby"  placeholder="Enter evaluated person name" {...register("sourceevaluatedby",{required:"Evaluated person name is required"})} onKeyUp={() => { trigger("sourceevaluatedby");}}/>
                          <label htmlFor="sourceevaluatedby" className='d-inline'>Evaluated By</label>
                          {errors.sourceevaluatedby && (<small className='text-danger'>{errors.sourceevaluatedby.message}</small>)}
                    </div>
                    
                    <div className="form-floating mb-3">
                    
                          <textarea className="form-control  shadow border border-black rounded" id="Feedback"  placeholder=" Feedback" {...register("feedback",{required:"Internal evaluation feedback is required"})} onKeyUp={() => { trigger("feedback");}}/>
                          <label htmlFor="feedback">Internal Evaluation Feedback</label>
                          {errors.feedback && (<small className='text-danger'>{errors.feedback.message}</small>)}
                            
                    </div>

                    <div className="form-floating mb-3">
                    
                          <textarea className="form-control  shadow border border-black rounded" id="customer"  placeholder="Customer Evaluation" {...register("customer",{required:"Customer evaluation is required"})} onKeyUp={() => { trigger("customer");}}/>
                          <label htmlFor="customer">Customer Evaluation</label>
                          {errors.customer && (<small className='text-danger'>{errors.customer.message}</small>)}
                            
                    </div>
                    <div className="form-floating mb-3">
                            <select  className="form-select"  {...register("status",{required:"selection status is required"})}>
                              <option value="accept">Profile Accepted</option>
                              <option value="reject">Profile Rejected
                              </option>
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputstatus" name="status">Selection Status </label>
                    </div>
                </div>
        
                    <div className="form-check">
                            <label className="form-check-label " htmlFor="Check2">I hereby declare that all the information given by me in this application is true and correct to the best of my knowledge and belief.</label>
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