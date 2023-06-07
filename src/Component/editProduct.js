import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link, useParams} from 'react-router-dom'

function Editproduct() {
    const {ppid}=useParams()
    const[name,pickName]=useState("");
    const[price,pickPrice]=useState("");
    const[qty,pickQty]=useState("");
    const[owner,pickOwner]=useState("");
    const[details,pickDetails]=useState("");
    const[message,updateMessage]=useState("")


    const getInfo=()=>{
        var input={
            "id":ppid
        }

        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

        var url="http://localhost:1235/editproduct";

        fetch(url,requestOptions)
        .then(response=>response.json())
        .then(data=>{
            updateMessage("Product Added");
            // pickName(data.name);
            // pickPrice(data.price);
            // pickQty(data.qty);
            // pickOwner(data.owner);
            // pickDetails(data.details);
        })
    }
    useEffect(()=>{
        getInfo()
    },[1])
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-4 offset-4">
                    <h3 className='text-center text-primary'>Edit Product</h3>
                    <p className="text-center text-success">{message}</p>

                    <div className="mb-3">
                        <label>Product Name</label>
                        <input type="text" className='form-control' onChange={obj => pickName(obj.target.value)} value={name} />
                    </div>
                    <div className="mb-3">
                        <label>Product Price</label>
                        <input type="number" className='form-control' onChange={obj => pickPrice(obj.target.value)} value={price} />
                    </div>
                    <div className="mb-3">
                        <label>Product Quantity</label>
                        <input type="number" className='form-control' onChange={obj => pickQty(obj.target.value)} value={qty} />
                    </div>
                    <div className="mb-3">
                        <label>Product Owner</label>
                        <input type="text" className='form-control' onChange={obj => pickOwner(obj.target.value)} value={owner} />
                    </div>
                    <div className="mb-4">
                        <label>Product Details</label>
                        <input type="text" className='form-control' onChange={obj => pickDetails(obj.target.value)} value={details} />
                    </div>
                    <div className="mb-3">
                        {/* <button className='btn btn-primary' onClick={save}>Save</button> */}
                        <Link className='btn btn-warning' to="/product">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editproduct;