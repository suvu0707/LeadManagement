import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'

function ParentDetails() {
    const[fname,pickFname]=useState("");
    const[mname,pickMname]=useState("");
    const dispatch=useDispatch();
    const parent=useSelector(state=>state.ParentList)
    const navigate=useNavigate()
    const save=()=>{
        var info={type:"addparent",parentinfo:{fname:fname,mname:mname}}
        navigate("/address")
        return info;
    }

    useEffect(()=>{
        pickFname(parent.fname)
        pickMname(parent.mname)
    },[parent])
  return (  
    <div className="container">
            <div className="row mt-4">
                <div className="col-lg-12">
                    <h3 className='text-center text-primary'>Student Details</h3>
                    {/* <p className='text-center text-success'>{message}</p> */}
                </div>
                <div className="col-lg-4 offset-4 p-4 bg-warning rounded">
                    <h3 className='text-start text-primary my-3'>Parent Details</h3>

                    <div className="mb-2">
                        <label>Father's Name</label>
                        <input type="text" className='form-control'  value={fname} onChange={obj=>pickFname(obj.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label>Mother's</label>
                        <input type="email" className='form-control' value={mname} onChange={obj=>pickMname(obj.target.value)} />
                    </div>
            
                    <div className="mb-2 text-center">
                        <Link className='btn btn-danger' to="/">Back</Link>
                        <button className='btn btn-primary mx-3' onClick={()=>(dispatch(save()))}>Save</button>
                        <Link className='btn btn-success' to="/preview">Preview</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ParentDetails