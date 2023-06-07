import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

function Editcategory() {
    const {ccid}=useParams()
    const[cname,pickCname]=useState("");

    const getInfo=()=>{
        var input={
            "id":ccid
        }

        const requestOptions={
            method:"GET",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

        fetch("http://localhost:9876/editcategory",requestOptions)
        .then(response=>response.json())
        .then(data=>{
            pickCname(data.name)
        })
    }

    useEffect(()=>{
        getInfo();
    },[1])
  return (
    <div className="container">
    <div className="row mt-4">
        <div className="col-lg-4 offset-4">
            <h3 className="text-center text-primary">Edit Category</h3>
            <div className="mb-3">
                <label>Category Name</label>
                <input type="text" className='form-control' value={cname} onChange={obj=>pickCname(obj.target.value)} />
            </div>
            <div className="mb-3">
                {/* <button className="btn btn-primary" onClick={save}>Save</button> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default Editcategory