const StudentList=(state={},action)=>{
    var oldStateArray = Object.assign({}, state);

    if(action.type=="add"){
        oldStateArray=action.studentinfo;
    }
    return oldStateArray;
}

export default StudentList;