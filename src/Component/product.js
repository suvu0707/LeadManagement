import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Product() {
    const [productlist, updateProduct] = useState([]);
    const[message,updateMessage]=useState("")

    const getProduct = () => {
        fetch("http://localhost:1235/productlist")
            .then(response => response.json())
            .then(data => {
                updateProduct(data);
                console.log(data)
            })
    }

    useEffect(() => {
        getProduct();
    }, [1]);

    const deleteProduct=(id,name)=>{
        var input={
            "id":id,
            "name":name
        }
        
        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

        var url="http://localhost:1235/deleteproduct";
        fetch(url,requestOptions)
        .then(response=>response.text())
        .then(data=>{
            updateMessage("Product Deleted");
            getProduct();
        })
    }
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
                                productlist.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{info.pname}</td>
                                            <td>{info.pprice}</td>
                                            <td>{info.pqty}</td>
                                            <td>{info.powner}</td>
                                            <td>{info.pdetails}</td>
                                            <td>
                                                <button className='btn btn-danger btn-sm mx-3' onClick={deleteProduct.bind(this,info.pid,info.pname)}><i className='fa fa-trash'></i></button>
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

export default Product