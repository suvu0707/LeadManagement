const AddressList=(state={},action)=>{
    var oldStateArray=Object.assign({},state)

    if(action.type=="addaddress"){
       oldStateArray=action.addressinfo
    }

    return oldStateArray;
}

export default AddressList