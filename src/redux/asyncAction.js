import {addItemAction, deleteItemAction, editItemAction, getItemsAction} from "./reducer";
import axios from 'axios/index';

export const  fetchItems = () => {
        return  (dispatch) => {
            axios.get(`http://localhost:3000/walking`)
                 .then(response=> dispatch(getItemsAction(response.data)))
               // .then(response => console.log(response))
        }
};
export const deleteItemsAA = (itemID) =>{
        return (dispatch) =>{
            axios.delete(`http://localhost:3000/walking/${itemID}`)
                .then((response)=>{
                        if (response.status){
                            dispatch(deleteItemAction());
                            dispatch(fetchItems()) //обновить
                        }
                    }
                )
        }
};
export const editItemAA = (item) => {
        return (dispatch) => {
            axios.put(`http://localhost:3000/walking/${item.id}`, item)
                .then((response)=>{
                    if (response.status) {
                        dispatch(editItemAction(item));
                        dispatch(fetchItems())
                    }
                })
        }
};
export const addItemAA = (item) =>{
        return (dispatch) => {
                axios.post(`http://localhost:3000/walking/`, item)
                    .then((response) =>{
                        if (response.status) {
                            dispatch(addItemAction(item));
                        }
                    })
        }
};
