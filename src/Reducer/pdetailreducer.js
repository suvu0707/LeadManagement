const ParentList=(state={},action)=>{
    var oldStateArray=Object.assign({},state);
    if(action.type=="addparent"){
        oldStateArray=action.parentinfo
    }
    return oldStateArray
}

export default ParentList;