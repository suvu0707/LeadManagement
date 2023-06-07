import {combineReducers} from 'redux';
import StudentList from './studentreducer';
import ParentList from './pdetailreducer';
import AddressList from './addressreducer';


const Mainreducer=combineReducers({
    StudentList,ParentList,AddressList
})

export default Mainreducer
