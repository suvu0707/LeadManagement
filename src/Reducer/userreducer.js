const UserList = (state=[], action) =>{

    var oldStateArray = Object.assign([], state);
    if(action.type=="newuser"){
        oldStateArray.push(action.userinfo);
    }
    if(action.type=="delete"){
        oldStateArray.splice(action.userindex,1);
    }
    return oldStateArray;
}

export default UserList;