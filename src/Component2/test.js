import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

function Test() {
    const[question,updateQuestion]=useState([]);

    const getQuestions=()=>{
        fetch("http://localhost:2323/questionlist")
        .then(res=>res.json())
        .then(data=>{
            updateQuestion(data)
        })
    };

    useEffect(()=>{
        getQuestions();
    })
    return (
        <div className="container">
            <div className="row mt-4">
                    <h3 className="text-center text-primary">Online Test React App</h3>
                    <div className="row mt-4">
                        <div className="col-lg-3 mb-3">
                           <Link to="/squestion" className='decoration'>
                           <div className="card border-2 border-primary">
                                <div className="card-body">
                                    <h5 className='text-center text-primary'>Questions</h5>
                                    <p className='text-center text-dark'>{question.length}</p>
                                </div>
                            </div>
                           </Link>
                        </div>

                        <div className="col-lg-3 mb-3">
                            <div className="card border-2 border-primary">
                                <div className="card-body">
                                    <h5 className='text-center text-primary'>Test Attened</h5>
                                    <p className='text-center text-dark'>300</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <div className="card border-2 border-primary">
                                <div className="card-body">
                                <h5 className='text-center text-primary'>Particpants</h5>
                                    <p className='text-center text-dark'>500 </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <div className="card border-2 border-primary">
                                <div className="card-body">
                                    <p className='text-center text-dark'>+ </p>
                                    <h5 className='text-center text-primary'>New Questions</h5>
                                </div>
                            </div>
                        </div>
                        

                            <div className="col-lg-3 mb-3">
                                <div className="card border-2 border-primary">
                                    <div className="card-body">
                                        <h5 className='text-center text-primary'>1st Grade Candidate</h5>
                                        <p className='text-center text-dark'>103</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-3">
                                <div className="card border-2 border-primary">
                                    <div className="card-body">
                                        <h5 className='text-center text-primary'>1st Grade Candidate</h5>
                                        <p className='text-center text-dark'>50</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-3">
                                <div className="card border-2 border-primary">
                                    <div className="card-body">
                                        <h5 className='text-center text-primary'>2nd Grade Candidate</h5>
                                        <p className='text-center text-dark'>200</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-3">
                                <div className="card border-2 border-primary">
                                    <div className="card-body">
                                        <h5 className='text-center text-primary'>3rd Grade Candidate</h5>
                                        <p className='text-center text-dark'>67</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

    )
}

export default Test