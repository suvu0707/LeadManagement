import {createStore} from 'redux';
import Mainreducer from './Reducer/mainreducer';
const MyStore=createStore(Mainreducer);

export default MyStore