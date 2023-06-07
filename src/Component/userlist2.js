import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom';
import Hoc from "./Hoc"

function Userlist2({data,deleteList,message}) {
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
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{info.name}</td>
                                            <td>{info.email}</td>
                                            <td>{info.password}</td>
                                            <td>
                                                <button className='btn btn-danger btn-sm mx-3' onClick={deleteList.bind(this,info.uid,info.name)}><i className='fa fa-trash'></i></button>
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

export default Hoc(Userlist2,"6789/Userlist","6789/deleteUser")