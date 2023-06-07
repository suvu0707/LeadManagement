import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Category() {
    const[category,updateCategory]=useState([]);

    const getCategory=()=>{
        fetch("http://localhost:9876/categorylist")
        .then(response=>response.json())
        .then(data=>{
            updateCategory(data);
            console.log(data)
        })
    }

    useEffect(()=>{
        getCategory()
    })

    const deleteCategory=(id,name)=>{
        var input={
            "id":id,
            "name":name
        }
        
        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

        var url="http://localhost:9876/deletecategory";
        fetch(url,requestOptions)
        .then(response=>response.text())
        .then(data=>{
            // updateMessage("Product Deleted");
            getCategory();
        })
    }
  return (
    <div className="container">
        <div className="row mt-4">
            <div className="col-lg-12">
                <h3 className="text-center text-primary">Categorylist <Link className="btn btn-primary" to="/acategory">Add Category</Link></h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Category Id</th>
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map((info,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{info.cid}</td>
                                        <td>{info.cname}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={deleteCategory.bind(this,info.cid,info.cname)}><i className='fa fa-trash'></i></button>
                                            <Link className="btn btn-primary" to={`/ecategory/${info.cid}`}><i className='fa fa-edit'></i></Link>
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

export default Category