import React from "react";
import { Link } from "react-router-dom";

const Mainheader = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg">
                <div className="container px-5  px-lg-3">
                    <Link className="navbar-brand text-warning py-1  fontweight" to="/"><i className="fa fa-heartbeat"></i> Lead Management</Link>
                    <button className="navbar-toggler m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon m-0 p-0"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <Link className="nav-link drop-down  text-white fontweight" to="/dashboard"> Dashboard </Link>
                            </li>
                            <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <Link className="nav-link drop-down  text-white fontweight" to="/test"> Test </Link>
                            </li>
                            {/* <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <Link className="nav-link drop-down  text-white fontweight" to="/output"> Output </Link>
                            </li> */}
                            <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <Link className="nav-link drop-down  text-white fontweight" to="/"> Students </Link>
                            </li>
                            <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <Link className="nav-link drop-down  text-white fontweight" to="/all"> S-All</Link>
                            </li> 
                            <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <Link className="nav-link drop-down  text-white fontweight" to="/product"> Product </Link>
                            </li>                          
                            <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <Link className="nav-link drop-down  text-white fontweight" to="/category"> Category</Link>
                            </li>
                            <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <Link className="nav-link drop-down  text-white fontweight" to="/user"> User</Link>
                            </li>
                            <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <Link className="nav-link drop-down  text-white fontweight" to="/practice"> Practice</Link>
                            </li>
                            <li className="nav-item py-1 py-lg-0 px-2 px-lg-2">
                                <a className=" nav-link pointer text-warning" ><i className="fa fa-power-off text-danger fontweight" > Logout </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> <br /><br />
        </>
    )
}

export default Mainheader;


