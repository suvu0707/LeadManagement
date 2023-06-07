import React, { useState, useEffect,useRef } from 'react'

function Singlequestion() {
    const [aquestion, updateQuestion] = useState([]);
    const [position, updatePosition] = useState(parseInt(0));
    const [option, pickOption] = useState("");
    const [disabled,setDisabled] = useState(false);
    const [cquestion, updateCquestion] = useState({});
    const [output, updateOutput] = useState([]);
    const [msg, setmsg] = useState("");
   

    const getQuestions = () => {
        fetch("http://localhost:2323/questionlist")
            .then(res => res.json())
            .then(data => {
                updateQuestion(data.reverse());
                if (localStorage.getItem("posss") == null) {
                    updateCquestion(data[0]);
                } else {
                    var p = localStorage.getItem("posss");
                    updateCquestion(data[p]);
                }
                // set(false)
            })
    };
    
    const next = () => {
        // window.location.reload()
        if (position == aquestion.length - 1) {
            setmsg("end ques");
        } 
        else {

            updatePosition(parseInt(position) + 1);
            localStorage.setItem("posss", parseInt(position) + 1);
            updateCquestion(aquestion[parseInt(position) + 1]);
        };

        if (option == cquestion.correctanswer) {
            cquestion.answergiven = "Right"       
        }
        else {
            cquestion.answergiven = "Wrong"
        }
        
        updateOutput(output => [...output, cquestion]);     // all the data form current ques added to output
        localStorage.setItem("output","ss")
        console.log(output.question[parseInt(position)]);
        setDisabled(!disabled);
        setTimeout(()=>{
            pickOption("")
        },1000)

    };


    const previous = () => {
         if(position == 0){
            setmsg("Cannot go previous");
        }  
        else {
            updatePosition(parseInt(position) - 1);
            localStorage.setItem("posss", parseInt(position) - 1);
            updateCquestion(aquestion[parseInt(position) - 1]);
            // console.log(localStorage.getItem("output"));

        }

    }


    useEffect(() => {

        if (localStorage.getItem("posss") == null) {
            localStorage.setItem("posss", 0);
        } else {
            var p = localStorage.getItem("posss");
            updatePosition(parseInt(p));
        }
        getQuestions();
    }, [])


    const click=()=>{
        setDisabled(true);
        
    };

    const skip =()=>{
        updatePosition(parseInt(position) + 1);
        updateCquestion(aquestion[parseInt(position) + 1]);
        cquestion.answergiven = "Not Attained"
        updateOutput(output => [...output, cquestion]);
        
    }



    const radiosWrapper = useRef();
    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if(findCheckedInput) {
          findCheckedInput.checked = false;
        }
      }, [cquestion]);



    // localStorage.removeItem("posss");
    // console.log("Position " + position);
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-4 offset-4">

                    <div className="card">
                        <div className="card-header">
                            <h3 className='text-primary text-center '>Questions</h3>

                        </div>
                        <div className="card-body mb-3" ref={radiosWrapper}>
                            <p className='text-success text-center'>{msg}</p>
                            <h4 className='text-primary '>{cquestion.qid} . {cquestion.question}</h4>
                            <div className="form-check">
                                <input className="form-check-input" value="1" onChange={obj => pickOption(obj.target.value)} onClick={click} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    {cquestion.option1}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" value="2" onChange={obj => pickOption(obj.target.value)} onClick={click} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    {cquestion.option2}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" value="3" onChange={obj => pickOption(obj.target.value)} onClick={click} type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label" for="flexRadioDefault3">
                                    {cquestion.option3}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" value="4" onChange={obj => pickOption(obj.target.value)} onClick={click} type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                <label className="form-check-label" for="flexRadioDefault4">
                                    {cquestion.option4}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" value="5" onChange={obj => pickOption(obj.target.value)} onClick={click} type="radio" name="flexRadioDefault" id="flexRadioDefault5"  />
                                <label className="form-check-label" for="flexRadioDefault5">
                                    {cquestion.option5}
                                </label>
                            </div>
                            <p className="text-success">Ans Givven : {option}</p>
                        </div>

                        <div className="card footer">
                            <div className='text-center p-2'>

                                <button className='btn btn-warning mx-2' onClick={previous} >Previous</button>
                                <button className='btn btn-success mx-2' disabled={disabled} onClick={skip} >Skip</button>
                                <button className='btn btn-primary mx-2' disabled={disabled==false?true:false}  onClick={next}>Next</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Question</th>
                                <th>Correct Answer</th>
                                <th>Answer Givven</th>
                                {/* <th>Result</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                output.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{info.qid}</td>
                                            <td>{info.question}</td>
                                            <td>{info.correctanswer}</td>
                                            <td>{info.answergiven}</td>
                                            {/* <td>{info.output}</td> */}
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

export default Singlequestion