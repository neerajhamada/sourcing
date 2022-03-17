import React from "react";
import { useForm } from 'react-hook-form';

import axios from 'axios';


export default function Sample () {
    const {register, handleSubmit,formState:{errors},reset,trigger} = useForm();
    return (
        <div className="me-md-5">
            <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Details
            </button>
                <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl text-black fs-5.5 fw-bold fst-sans-serif">
              <div className="modal-content  bg-white" >
                  <div className="modal-header">
                  <h5 className="modal-title fw-bold w-100 text-center" id="exampleModalLabel">ENTER CANDIDATE DETAILS</h5> 
                  <button type="button" className="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  
            <form role="form">

            <div className="row">
              <div className='col-12 col-md-1'></div>
                <div className='col-12 col-md-5 '>
                    <div className="form-floating mb-3">
                            <select defaultValue={'selectsrc'} className="form-select shadow border border-black rounded"  {...register("source",{required:"source is required"})}>
                              <option value="selectsrc" hidden >select source</option>
                                <option value="internal">Internal</option>
                                <option value="ukEP">UK EP</option>
                                <option value="externalEP">External - EP</option>
                                <option value="ukBA">UK BA</option>
                                <option value="r2r">R2R</option>
                                <option value="knome">Knome post</option>
                                <option value="rmg">RMG</option>
                                <option value="ST">Shailender Tiwari</option>
                                <option value="internaluk">Internal UK</option>
                                {/* <option value="externalEPST">External - EP (GBU - Shailender)</option> */}
                              </select>
                            <label className="pr-3"  htmlFor="exampleSource" name="source">Source </label>
                          
                          {/* <input type="text" className="form-control  shadow border border-black rounded " id="sourcesource"  placeholder="Enter Source" {...register("sourcesource",{required:"source is required"})} onKeyUp={() => { trigger("sourcesource");}}/>
                          <label htmlFor="sourcesource" className='d-inline'>Source</label>
                          {errors.sourcesource && (<small className='text-danger'>{errors.sourcesource.message}</small>)} */}
                    </div>
        
                    <div className="form-floating mb-3">
                            <select defaultValue={'selectloc'} className="form-select shadow border border-black rounded"  {...register("location",{required:"location is required"})}>
                            <option value="selectloc" hidden >select location</option>
                              <option value="onshore">Onshore</option>
                              <option value="offshore">Offshore</option>
                            </select>
                            <label className="pr-3"  htmlFor="exampleInputlocation" name="location">Location </label>
                    </div>

                    <div className="form-floating mb-3">
                            <select defaultValue={'selectmedium'} className="form-select  shadow border border-black rounded"  {...register("receivedvia",{required:"received via is required"})}>
                            <option value="selectmedium" hidden >select the medium</option>
                              <option value="knome">Knome</option>
                              <option value="linkedin">LinkedIn</option>
                              <option value="externalprofile">External Profile</option>
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputreceivedvia" name="receivedvia">Received Via</label>
                    </div>

                    <div className="form-floating mb-3">
                            <select defaultValue={'selectInEx'} className="form-select shadow border border-black rounded"  {...register("internalexternal",{required:"internal/external is required"})}>
                            <option value="selectInEx" hidden >select internal or external</option>
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
                            
                            <select defaultValue={'selectlab'}  className="form-select shadow border border-black rounded"  {...register("sourcelab",{required:"lab is required"})}>
                            <option value="selectlab" hidden >select lab</option>
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
            </div>
        
                    <div className="col-12 col-md-5">
                    
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
                    <div className="form-floating mb-3 shadow border border-black rounded">
                            <select defaultValue={'selected'} className="form-select"  placeholder="Select status"{...register("status",{required:"selection status is required"})}>
                              <option value="selected" hidden >select status</option>
                              <option value="accept"> Accepted</option>
                              <option value="reject" > Rejected</option>
                            </select>
                            <label className="pr-3" htmlFor="exampleInputstatus" name="status">Status </label>
                    </div>
                    </div>
                    <div className="text-center pt-2">
                          <input type="submit" className='btn btn-primary' value="Submit"/> 
                    </div>
                    </div>
            </form>
                </div>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div> */}
                </div>
            </div>
            </div>
    )
}