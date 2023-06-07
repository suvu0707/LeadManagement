import React from 'react';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

const User = () =>{
    const dispatch=useDispatch();
    const alluser=useSelector(state=>state.UserList);
    const[fullname,pickName]=useState("")
    const[edu,pickEdu]=useState("")
    const[mobile,pickMobile]=useState("");

    const save=()=>{
        var info={
            type:"newuser",userinfo:{name:fullname,edu:edu,mobile:mobile}
        }
        pickName("");pickEdu("");pickMobile("");
        return info;
    }

    const deleteUser=(index)=>{
        var info={
            type:"delete",userindex:index
        }
        return info;
    }
    return(
        <div className="container mt-4">
            <div className='row'>
                <div className="col-lg-12 text-center">
                    <h2> User Management </h2>
                    <p>
                      <input type="text" className="m-2" placeholder='Full Name' value={fullname} onChange={obj=>pickName(obj.target.value)}/>
                      <input type="text" className="m-2" placeholder='Education' value={edu} onChange={obj=>pickEdu(obj.target.value)}/>
                      <input type="text" className="m-2" placeholder='Mobile No' value={mobile} onChange={obj=>pickMobile(obj.target.value)}/>
                      <button className="btn btn-primary" onClick={()=>dispatch(save())}>Send To Store</button>  
                    </p>
                    <p>Total Users : {alluser.length}</p>
                    <table className='table table-bordered'>
                        <thead>
                            <tr className='bg-light text-primary'>
                                <th>User Index</th>
                                <th>Full Name</th>
                                <th>Education</th>
                                <th>Mobile No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((info,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{info.name}</td>
                                            <td>{info.edu}</td>
                                            <td>{info.mobile}</td>
                                            <td><button onClick={()=>(dispatch(deleteUser(index)))}>Delete</button></td>
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

export default User;