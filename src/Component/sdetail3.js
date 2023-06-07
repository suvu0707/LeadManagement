import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'

function AddressDetails() {
    const [town, pickTown] = useState("");
    const [post, pickPost] = useState("");
    const [dist, pickDist] = useState("");
    const [state, pickState] = useState("");
    const [pin, pickPin] = useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const address=useSelector(state=>state.AddressList)
    const save = () => {
        var info = { type: "addaddress", addressinfo: { town: town, post: post, dist: dist, state: state, pin: pin } }
        navigate("/preview")
        return info
    }

    useEffect(()=>{
        pickTown(address.town)
        pickPost(address.post)
        pickDist(address.dist)
        pickPin(address.pin)
        pickState(address.state)
    },[address])

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-12">
                    <h3 className='text-center text-primary'>Student Details</h3>
                    {/* <p className='text-center text-success'>{message}</p> */}
                </div>
                <div className="col-lg-4 offset-4 p-4 bg-warning rounded">
                    <h3 className='text-start text-primary my-3'>Address Details</h3>

                    <div className="mb-2">
                        <label>Home Town</label>
                        <input type="text" className='form-control' value={town} onChange={obj => pickTown(obj.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label>Post Office</label>
                        <input type="text" className='form-control' value={post} onChange={obj => pickPost(obj.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label>District</label>
                        <input type="text" className='form-control' value={dist} onChange={obj => pickDist(obj.target.value)} />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label>State</label>
                                <input type="text" className='form-control' value={state} onChange={obj => pickState(obj.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label>Pincode</label>
                                <input type="text" className='form-control' value={pin} onChange={obj => pickPin(obj.target.value)} />
                            </div>
                        </div>
                    </div>



                    <div className="mb-2 text-center">
                        <Link className='btn btn-danger' to="/parent">Back</Link>
                        <button className='btn btn-primary mx-3' onClick={() => (dispatch(save()))}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressDetails