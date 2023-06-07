import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function User() {
    const [Userlist, updateUser] = useState([]);
    const[message,updateMessage]=useState("")

    const getUser = () => {
        fetch("http://localhost:6789/Userlist")
            .then(response => response.json())
            .then(data => {
                updateUser(data);
                console.log(data)
            })
    }

    useEffect(() => {
        getUser();
    }, [1]);

    const deleteUser=(id,name)=>{
        var input={
            "id":id,
            "name":name
        }
        
        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

        var url="http://localhost:6789/deleteUser";
        fetch(url,requestOptions)
        .then(response=>response.text())
        .then(data=>{
            updateMessage("User Deleted");
            getUser();
        })
    }
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-12">
                    <h3 className="text-primary text-center">Userlist <Link className='btn btn-primary' to="/nuser">Add User</Link></h3>
                    <p className="text-center text-primary">{message}</p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Userlist.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{info.name}</td>
                                            <td>{info.email}</td>
                                            <td>{info.password}</td>
                                            <td>
                                                <button className='btn btn-danger btn-sm mx-3' onClick={deleteUser.bind(this,info.uid,info.name)}><i className='fa fa-trash'></i></button>
                                                <Link className='btn btn-primary btn-sm' to={`/euser/${info.uid}`}><i className='fa fa-edit'></i></Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User