import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Preview = () => {
    const allstudent = useSelector(state => state.StudentList);
    const allparent = useSelector(state => state.ParentList);
    const alladdress = useSelector(state => state.AddressList);
    const[message,updateMessage]=useState("")


    const save=()=>{
        const studentdata={
            "personal":allstudent,
            "parent":allparent,
            "address":alladdress
        }

        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(studentdata)
        }

        fetch("http://localhost:7894/Userlist",requestOptions)
        .then(response=>response.json())
        .then(data=>{
            if(Object.keys(data).length){
                updateMessage("Plz fill the form")
            }else{
                updateMessage("Form Submitted Successfully")
            }
            setTimeout(             
                window.location.reload(),3000
            )
           
        })
    }

    return (
        <div className="container mt-4">
            <div className='row'>
                <div className="col-lg-12 text-center">
                    <h5 className='text-danger'>{message}</h5>

                    <p> Student Details</p>
                    <table className='table table-bordered'>
                        <thead>
                            <tr className='bg-light text-primary'>
                                <th>Student Name</th>
                                <th>Email</th>
                                <th>DOB</th>
                                <th>Qualification</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td> {allstudent.name} </td>
                                <td> {allstudent.email} </td>
                                <td> {allstudent.dob} </td>
                                <td> {allstudent.qualification} </td>
                                <td> <Link className='btn btn-primary btn-sm' to="/"><i className='fa fa-edit'></i></Link> </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <p> Parent Details</p>
                    <table className='table table-bordered'>
                        <thead>
                            <tr className='bg-light text-primary'>
                                <th>Father's Name</th>
                                <th>Mother's Name</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td> {allparent.fname} </td>
                                <td> {allparent.mname} </td>
                                <td> <Link className='btn btn-primary btn-sm' to="/parent"><i className='fa fa-edit'></i></Link> </td>
                            </tr>

                        </tbody>
                    </table>
                    <br />
                    <p> Address Details</p>
                    <table className='table table-bordered'>
                        <thead>
                            <tr className='bg-light text-primary'>
                                <th>Home Town</th>
                                <th>Post Office</th>
                                <th>District</th>
                                <th>State</th>
                                <th>Pin</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {alladdress.town} </td>
                                <td> {alladdress.post} </td>
                                <td> {alladdress.dist} </td>
                                <td> {alladdress.state} </td>
                                <td> {alladdress.pin} </td>
                                <td> <Link className='btn btn-primary btn-sm' to="/address"><i className='fa fa-edit'></i></Link> </td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="m-3">
                        <button className='btn btn-primary' onClick={save}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview;