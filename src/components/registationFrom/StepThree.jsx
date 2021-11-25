import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineDoneAll } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const StepThree = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();

        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successfully Registered',
        showConfirmButton: false,
        timer: 2500
        })
      }
    return (
        <div className="container">
           <div className="shadow-sm p-5 mb-5 bg-body rounded custom__filed m-5">
            <h3 className="mb-3 text-center">Verification Code</h3>
            <form className="row g-3 d-flex justify-content-center" onSubmit={onSubmitHandler}>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="phone" placeholder="Verify Code"  required/>
                    </div>

                    <div className="col-12 d-flex justify-content-end">
                        <div className="">
                          <Link to="/step_two" type="button" className="btn px-5"> <BsArrowLeft/> Back</Link>
                          <button  type="submit"  className="btn btn-primary px-4 ml-md-4 ml-0 mt-md-0 mt-3 text-white">Submit <MdOutlineDoneAll/></button>
                        </div>
                    </div>
                </form>
        </div>
        </div>
    );
};

export default StepThree;
