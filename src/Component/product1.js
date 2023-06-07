import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom';
import Hoc from './Hoc';

function Product({data,deleteList,message}) {

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-12">
                    <h3 className="text-primary text-center">Productlist <Link className='btn btn-primary' to="/nproduct">Add Product</Link></h3>
                    <p className="text-center text-primary">{message}</p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Owner</th>
                                <th>Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{info.pname}</td>
                                            <td>{info.pprice}</td>
                                            <td>{info.pqty}</td>
                                            <td>{info.powner}</td>
                                            <td>{info.pdetails}</td>
                                            <td>
                                                <button className='btn btn-danger btn-sm mx-3' onClick={deleteList.bind(this,info.pid,info.pname)}><i className='fa fa-trash'></i></button>
                                                <Link className='btn btn-primary btn-sm' to={`/eproduct/${info.pid}`}><i className='fa fa-edit'></i></Link>
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

export default Hoc(Product,"1235/productlist","1235/deleteproduct")