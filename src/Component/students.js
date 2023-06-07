import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'

function Students() {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const[fname,pickFname]=useState("");
    const[email,pickEmail]=useState("");
    const[dob,pickDob]=useState("");
    const[qualification,pickQualification]=useState("");
    const[message,updateMessage]=useState("")
    const student=useSelector(state=>state.StudentList)

    const save=()=>{
        var info={type:"add",studentinfo:{name:fname,email:email,dob:dob,qualification:qualification}};
        navigate("/parent")
        return info;
        
    }

    useEffect(()=>{
        pickFname(student.name);
        pickEmail(student.email);
        pickDob(student.dob);
        pickQualification(student.qualification);

    },[student])
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-12">
                    <h3 className='text-center text-primary'>Student Details</h3>
                    {/* <p className='text-center text-success'>{message}</p> */}
                </div>
                <div className="col-lg-4 offset-4 p-4 bg-warning rounded">
                    <h3 className='text-start text-primary my-3'>Personal Details</h3>

                    <div className="mb-2">
                        <label>Full Name</label>
                        <input type="text" className='form-control'  value={fname} onChange={obj=>pickFname(obj.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label>Email Id</label>
                        <input type="email" className='form-control' value={email} onChange={obj=>pickEmail(obj.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label>Date Of Birth</label>
                        <input type="date" className='form-control' value={dob} onChange={obj=>pickDob(obj.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label>Qualification</label>
                        <input type="text" className='form-control' value={qualification} onChange={obj=>pickQualification(obj.target.value)} />
                    </div>
                    <div className="mb-2 text-center">
                        <button className='btn btn-danger' disabled>Back</button>
                        <button className='btn btn-primary mx-3'  onClick={()=>(dispatch(save()))}>Save</button>
                        <Link className='btn btn-success' to="/preview">Preview</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Students