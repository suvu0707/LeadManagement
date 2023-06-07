import React, { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ReactToPdf from "react-to-pdf";
import {Link} from 'react-router-dom';

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [12, 12]
}
const All = () => {

    const [allstudent, updateAllstudent] = useState([]);


    const getAllstudent = () => {
        fetch("http://localhost:7894/Userlist")
            .then(response => response.json())
            .then(data => {
                updateAllstudent(data);
                console.log(data)
            })
    }

    useEffect(() => {
        getAllstudent()
    }, [1])

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-12" ref={ref}>
                    <h3 className="text-center text-primary m-3">All Student Details</h3>
                    <table className='table table-bordered w-auto ' id="table-to-xls">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>DOB</th>
                                <th>Qualification</th>
                                <th>Father's Name</th>
                                <th>Mother's Name</th>
                                <th>Address</th>
                                {/* {(isClicked==true)? "" :<th>Action</th>} */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allstudent.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{info.personal.name}</td>
                                            <td>{info.personal.email}</td>
                                            <td>{info.personal.dob}</td>
                                            <td>{info.personal.qualification}</td>
                                            <td>{info.parent.fname}</td>
                                            <td>{info.parent.mname}</td>
                                            <td>{info.address.town}, {info.address.post}, {info.address.dist},{info.address.state}, {info.address.pin}</td>
                                            {/* {(isClicked==true)? "" :<td><button className='btn btn-primary btn-sm'>Edit</button></td>} */}
                                            <td><button className='btn btn-primary btn-sm'>Edit</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                </div>
            </div>

            <div>


            </div>
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button mx-2"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Download as XLS" />

            <ReactToPdf targetRef={ref} filename="all.pdf" options={options}>
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
        </div>
    )
}

export default All;