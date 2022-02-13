import {getItemsAction} from "../redux/reducer/distanceReducer";
import axios from 'axios';

export const  fetchItems = () => {
        return  (dispatch) => {
            axios.get(`http://localhost:3001/walking`)
                 .then(response=> dispatch(getItemsAction(response)))
                .then(response => console.log(response))
        };
} ;