import { useState, useEffect, useRef } from "react";


const TestReport = () =>{

    const [allQ, setAllQ] = useState([]);
    const [right, updateright] = useState(0);
    const [wrong, updatewrong] = useState(0);
    const [percentage, updatePercentage] = useState(0);
    const [message, updateMessage] = useState("");
    var totalq=allQ.length

    const getAllQ = () =>{
        if(localStorage.getItem("answerArray")==null){
            var answerArray=[];
            setAllQ(answerArray);
        }else{
            var oldq = JSON.parse(localStorage.getItem("answerArray"));
            setAllQ(oldq);
            var r=0;
            var w=0;    
            oldq.map((q)=>{               
                if(q.correct.localeCompare("Right") == 0){
                   r = r + 1;     
                   updateright(r);           
                }
                else {
                    w = w + 1;   
                    updatewrong(w);                
                }
            })   
            var per = (r/10) * 100;
            updatePercentage(per)
        }
    }

    useEffect(()=>{           
        getAllQ();    
    }, []);

    const submit=()=>{
        var input={
            "userid" :1,
            "subject":"Html",
            "totalq":totalq,
            "rightq":right,
            'wrongq':wrong,
            'percentage':percentage
        }

        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input)
        }

       fetch("http://localhost:5656/savereport",requestOptions)
       .then(res=>res.text())
       .then(data=>{
        updateMessage(data);
        localStorage.clear();
        console.log(data);
        window.location.reload()
       })
       
    }

    return(
        <>       
         <div className="container">
            <div className="row">
                
                <div className="col-lg-12">
                <h4 className="text-center text-primary mt-3">My Test Result {totalq}</h4>
                <p className="text-primary text-center">{message}</p>
                <h5> Right Ans : {right}  ::  Wrong Ans : {wrong}  ::  Percentage Got : {percentage}%</h5>
                    {
                      allQ.map((questions, index)=>{
                        return(
                            <dl className="mb-3" key={index}>
                                <dt><b>{questions.question}</b></dt>
                                <dd>1. {questions.option1}</dd>
                                <dd>2. {questions.option2}</dd>
                                <dd>3. {questions.option3}</dd>
                                <dd>4. {questions.option4}</dd>
                                <dd className="text-danger">
                                    Right Answer : {questions.correctanswer} - 
                                    Your Answer : {questions.answergiven} - 
                                    Final Result : <b>{questions.correct}</b>
                                </dd>
                            </dl>
                        )
                      })  
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 offset-4 text-center mt-2">
                    <button className="btn btn-warning m-1" onClick={submit}>Submit Result</button>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default TestReport;