import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

function Edituser() {
    const{uuid}=useParams()
    const[uname,pickUname]=useState("");
    const[email,pickEmail]=useState("");
    const[password,pickPassword]=useState("");

    const getInfo=()=>{
        var input={
            "id":uuid,
            "name":uname,
            "email":email,
            "password":password,
        }

        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

        fetch("http://localhost:6789/edituser",requestOptions)
        .then(response=>response.json())
        .then(data=>{
            pickUname(data[0].name);
            pickEmail(data[0].email);
            pickPassword(data[0].password);
            console.log(data)
        })
    }

    useEffect(()=>{
        getInfo();
    },[1]);

    const save=()=>{
        var input={
            "id":uuid,
            "name":uname,
            "email":email,
            "password":password,
        }

        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

        fetch("http://localhost:6789/updateuser",requestOptions)
        .then(response=>response.text())
        .then(data=>{
            console.log(data)
        })
    }

  return (
    <div className="container">
        <div className="row mt-4">
            <div className="col-lg-4 offset-4">
                <h3 className="text-center text-primary">Edit user</h3>
                <div className="mb-3">
                    <label>user Name</label>
                    <input type="text" className='form-control' value={uname} onChange={obj=>pickUname(obj.target.value)} />
                </div>
                <div className="mb-3">
                    <label>user Email</label>
                    <input type="text" className='form-control' value={email} onChange={obj=>pickEmail(obj.target.value)} />
                </div>
                <div className="mb-3">
                    <label>user Password</label>
                    <input type="text" className='form-control' value={password} onChange={obj=>pickPassword(obj.target.value)} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={save}>Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edituser