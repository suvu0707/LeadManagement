import React from 'react';


function Output() {
  return (
    <div className="container">
         <div className="row mt-4">
                <div className="col-lg-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Question</th>
                                <th>Correct Answer</th>
                                <th>Answer Givven</th>
 
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                output.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{info.qid}</td>
                                            <td>{info.question}</td>
                                            <td>{info.correctanswer}</td>
                                            <td>{info.answergiven}</td>
                                           
                                        </tr>
                                    )
                                })
                            } */}
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
  )
}

export default Output