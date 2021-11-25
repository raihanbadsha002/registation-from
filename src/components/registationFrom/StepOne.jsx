import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const StepOne = () => {
    const navigate = useNavigate();
    

    const onSubmitHandler = (e) => {
         e.preventDefault();
         navigate('/step_two')
       }
    return (
        <div className="container">
           <div className="shadow-sm p-5 mb-5 bg-body rounded custom__filed m-5">
               <h2 className="mb-3">Create Your Won Account</h2>
               <form className="row g-3" onSubmit={onSubmitHandler}>
                    <div className="col-md-6">
                        <label for="first_name" className="form-label">First Name*</label>
                        <input type="text" className="form-control" id="first_name" placeholder="MD.Maruf" required />
                    </div>
                    <div className="col-md-6">
                        <label for="last_name" className="form-label">Last Name*</label>
                        <input type="text" className="form-control" id="last_name" placeholder="Ahmed" required/>
                    </div>
                    <div className="col-md-10">
                        <label for="email" className="form-label">Email*</label>
                        <input type="email" className="form-control" id="email" placeholder="example@gmail.com" required/>
                    </div>
                    <div className="col-md-4">
                        <label for="password" className="form-label">Password*</label>
                        <input type="password" className="form-control" id="password" placeholder="********" required/>
                    </div>
                    <div className="col-md-4">
                        <label for="confirmpass" className="form-label">Confirm Password*</label>
                        <input type="password" className="form-control" id="confirmpass" placeholder="********" required/>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" /> Show Password
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <div className="">
                          <Link to="/" type="button" className="btn px-5"><BsArrowLeft/> Back</Link>
                          <button  type="submit"  className="btn btn-primary px-4 ml-md-4 ml-0 mt-md-0 mt-3 text-white">Next <BsArrowRight/> </button>
                        </div>
                    </div>
                </form>
               </div>
        </div>
    );
};

export default StepOne;