import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const StepTwo = () => {
    const navigate = useNavigate();
    

    const onSubmitHandler = (e) => {
         e.preventDefault();
         navigate('/step_three')
       }
    return (
        <div className="container">
           <div className="shadow-sm p-5 mb-5 bg-body rounded custom__filed m-5">
               <h2 className="mb-3">Fillup your more information</h2>
               <form className="row g-3" onSubmit={onSubmitHandler}>
                    <div className="col-md-6">
                        <label for="phone" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phone" placeholder="017xxxxxxxxxx(optional)"  />
                    </div>
                    <div className="col-md-6">
                        <label for="email" className="form-label">Recovery Email Address*</label>
                        <input type="email" className="form-control" id="email" placeholder="example@gmail.com" required/>
                    </div>
                    <div className="col-md-7">
                        <label for="date" className="form-label">Date of Birth*</label>
                        <input type="date" className="form-control" name="date" id="date" required/>
                    </div>
                    <div className="col-md-7">
                      <label for="date" className="form-label">Gender*</label> <br />
                       <input type="radio" name="male" id="male" /> Male <br /> 
                       <input type="radio" name="female" id="female" /> Female  <br />
                       <input type="radio" name="others" id="others" /> Others
                        
                    </div>

                    <div className="col-12 d-flex justify-content-end">
                        <div className="">
                          <Link to="/" type="button" className="btn px-5"> <BsArrowLeft/> Back</Link>
                          <button  type="submit"  className="btn btn-primary px-4 ml-md-4 ml-0 mt-md-0 mt-3 text-white">Next <BsArrowRight/> </button>
                        </div>
                    </div>
                </form>
               </div>
        </div>
    );
};

export default StepTwo;