import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Addproduct() {
    const[name,pickName]=useState("");
    const[price,pickPrice]=useState("");
    const[qty,pickQty]=useState("");
    const[owner,pickOwner]=useState("");
    const[details,pickDetails]=useState("");
    const[message,updateMessage]=useState("")


    const save=()=>{
        var input={
            "name":name,
            "price":price,
            "qty":qty,
            "owner":owner,
            "details":details
        }

        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

        var url="http://localhost:1235/save";

        fetch(url,requestOptions)
        .then(response=>response.text())
        .then(data=>{
            updateMessage("Product Added");
        })
    }
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-4 offset-4">
                    <h3 className='text-center text-primary'>Add Product</h3>
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
                        <button className='btn btn-primary mx-4' onClick={save}>Save</button>
                        <Link className='btn btn-warning' to="/product">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addproduct;