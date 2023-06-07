const BookList = (state=[], action) =>{

    var oldStateArray = Object.assign([], state);
    if(action.type=="newbook"){
        oldStateArray.push(action.name);
    }
    if(action.type=="delete"){
        oldStateArray.splice(action.bookindex,1);
    }
    return oldStateArray;
}

export default BookList;


/*
    action={type:"new",name="java"}  type and name can be anything
    action={type:"delete","index:3"}  
    var info = {type:"newbook", name:bookname };
     var info = {type:"delete", bookindex:index };
*/