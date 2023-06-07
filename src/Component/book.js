import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Book = () =>{
    const[bookname , pickName] = useState("");

    const save = () =>{
        var info = {type:"newbook", name:bookname };
        pickName(""); // to clear the bookname
        return info;
    }
    const deleteBook = (index) =>{
        var info = {type:"delete", bookindex:index };
        return info;
    }
    const dispatch = useDispatch();
    const allbook=useSelector(state=>state.BookList)

    return(
       <div className="container mt-4">
            <div className='row'>
                <div className="col-lg-6 offset-3 text-center">
                    <h2> Book Management </h2>
                    <p>
                      Enter Book Name : 
                      <input type="text" className="m-2"
                      onChange={obj=>pickName(obj.target.value)} value={bookname}/>
                      <button className="btn btn-primary"
                      onClick={ ()=>dispatch( save() ) }>Send To Store</button>  
                    </p>
                    <p>Total Books : {allbook.length}</p>
                    <table className='table table-bordered'>
                        <thead>
                            <tr className='bg-light text-primary'>
                                <th>Book Index</th>
                                <th>Book Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allbook.map((name,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{name}</td>
                                            <td><button onClick={()=>dispatch(deleteBook(index))}>Delete</button></td>
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

export default Book;