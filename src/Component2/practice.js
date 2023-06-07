import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

function Practice() {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const navigate = useNavigate()
    const [option, pickOption] = useState("");
    const [questions, updateQuestions] = useState([]);
    const [cquestion, updatecquestion] = useState({});  // As we want to show single question on every page dynamically then we can create a state variable as object for every question
    const [pos, setPos] = useState(0);                      // And we devided all question array to single object and can fetch single data using map(). 
    const [message, updateMessage] = useState("");
    // const [disabled,setDisabled] = useState(false);
    const [skipDisable, setSkipDisable] = useState(false);
    const [nextDisable, setNextDisable] = useState(true);
    const [completed, setCompleted] = useState("");
    const [completedmsg, setcompletedmsg] = useState("");

    const uncheckB1 = () => {
        ref1.current.checked = false;
    }
    const uncheckB2 = () => {
        ref2.current.checked = false;
    }
    const uncheckB3 = () => {
        ref3.current.checked = false;
    }
    const uncheckB4 = () => {
        ref4.current.checked = false;
    }
    const uncheckB5 = () => {
        ref5.current.checked = false;
    }

    const getQuestions = () => {
        fetch("http://localhost:2323/questionlist")
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    if (localStorage.getItem("pos") == data.length - 1) {
                        setcompletedmsg("Thanks Your Test is Completed ! Go to Test Result");
                        updateQuestions([]);
                        setNextDisable(true);
                        setSkipDisable(true);
                        setCompleted("d-none");
                    }
                    else {
                        updateQuestions(data.reverse());   // 1
                        if (localStorage.getItem("pos") == null) {     //3.After page load it show the current question  
                            updatecquestion(data[0]);
                        }
                        else {
                            var p = localStorage.getItem("pos");
                            updatecquestion(data[p])

                        }
                    }
                }
            })
    }


    const handleChange = (event) => {
        pickOption(event.target.value);
        setNextDisable(false);
        setSkipDisable(true);
    }


    const next = () => {
        setNextDisable(true);
        setSkipDisable(false);
        uncheckB1(); uncheckB2(); uncheckB3(); uncheckB4(); uncheckB5();


        if (option == cquestion.correctanswer) {
            cquestion.correct = "Right";      //we add a property to our object
            cquestion.answergiven = option
        }
        else {
            cquestion.correct = "Wrong";
            cquestion.answergiven = option;

        }


        if (localStorage.getItem("answerArray") == null) {
            var answerArray = [];
            answerArray = answerArray.concat(cquestion);
            localStorage.setItem("answerArray", JSON.stringify(answerArray));
        } else {
            var oldq = JSON.parse(localStorage.getItem("answerArray"));
            oldq = oldq.concat(cquestion);
            localStorage.setItem("answerArray", JSON.stringify(oldq));
        }

        if (pos == questions.length - 1) {
            updateMessage("End of Questions");
            navigate("/testreport");
        } else {
            var pp = parseInt(pos) + 1;
            updatecquestion(questions[pp]);
            setPos(pp);
            localStorage.setItem("pos", pp);
        }

    }



    // useEffect(() => {
    //     if (localStorage.getItem("pos") == null) {      //2...As we want to show the same question after page refresh also,then add condn :: the page pos not exist in localstorage, then it store the 1st data with setItem=0 
    //         localStorage.setItem("pos", 0)              //else setPos(current localstoarage pos)
    //     } else {
    //         setPos(localStorage.getItem("pos"))
    //     }
    //     getQuestions();
    // }, [true]);

    useEffect(() => {
        if (localStorage.getItem("pos") == null) {
            localStorage.setItem("pos", 0);
        } else {
            var p = localStorage.getItem("pos");
            setPos(parseInt(p));
        }
        getQuestions();
    }, []);


    // localStorage.removeItem("pos")
    return (
        <>

            <p className="text-center text-danger mt-4">{completedmsg}</p>
            <div className={completed}>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-lg-4 offset-4">

                            <div className="card">
                                <div className="card-header">
                                    <h3 className='text-primary text-center '>Questions</h3>

                                </div>
                                <div className="card-body mb-3">
                                    <p className='text-success text-center'>{message}</p>
                                    <h4 className='text-primary '>{cquestion.qid} . {cquestion.question}</h4>
                                    <div className="form-check">
                                        <input className="form-check-input" ref={ref1} value="1" onChange={handleChange} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            {cquestion.option1}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" ref={ref2} value="2" onChange={handleChange} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            {cquestion.option2}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" ref={ref3} value="3" onChange={handleChange} type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label className="form-check-label" for="flexRadioDefault3">
                                            {cquestion.option3}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" ref={ref4} value="4" onChange={handleChange} type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                        <label className="form-check-label" for="flexRadioDefault4">
                                            {cquestion.option4}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" ref={ref5} value="5" onChange={handleChange} type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                        <label className="form-check-label" for="flexRadioDefault5">
                                            {cquestion.option5}
                                        </label>
                                    </div>
                                    <p className="text-success">Ans Givven : {option}</p>
                                </div>

                                <div className="card footer">
                                    <div className='text-center p-2'>

                                        <button className='btn btn-success mx-2' disabled={skipDisable} >Skip</button>
                                        <button className='btn btn-primary mx-2' disabled={nextDisable} onClick={next}>Next</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Practice