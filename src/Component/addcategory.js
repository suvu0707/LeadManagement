import React from 'react'
import { useState } from 'react'

function Addcategory() {
    const[cname,pickCname]=useState("");

    const save=()=>{
        var input={
            "name":cname
        }

        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

        fetch("http://localhost:9876/save",requestOptions)
        .then(response=>response.text())
        .then(data=>{
            console.log(data)
        })
    }
  return (
    <div className="container">
        <div className="row mt-4">
            <div className="col-lg-4 offset-4">
                <h3 className="text-center text-primary">Add Category</h3>
                <div className="mb-3">
                    <label>Category Name</label>
                    <input type="text" className='form-control' value={cname} onChange={obj=>pickCname(obj.target.value)} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={save}>Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addcategory