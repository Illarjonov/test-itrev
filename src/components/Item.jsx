import * as moment from 'moment';
import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemsAA, editItemAA} from "../../redux/asyncAction";

const List = ({item}) => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const inputDateRef = useRef();
    useSelector((state)=> state);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };
    const changeDateFocus = () => {
        inputDateRef.current.disabled = false;
        inputDateRef.current.focus();
    };
    //13 это Enter key
    const update = (id, value, e) => {
        if (e.which === 13) {
            dispatch(editItemAA(item));
            inputRef.current.disabled = true;
            inputDateRef.current.disabled = true;
        }
    };
    const updateDate = (id, value, e) => {
        if (e.which === 13) {
            dispatch(editItemAA(item));
            inputDateRef.current.disabled = true;
        }
    };
        return( <div>
                <li key={item.id}
                    style={{cursor: "pointer"}}>
                    <div style={{color: 'red'}}> ({item.id})</div>
                    <div>  </div>
                    <textarea
                        ref={inputDateRef}
                        disabled={inputDateRef}
                        defaultValue={moment(item.date).format("DD.MM.YYYY")}
                        onKeyPress={(e) => updateDate(item.id, item.date = inputDateRef.current.value, e)}
                    />
                        <button onClick={() => {
                            changeDateFocus()
                        }}> Ред. </button>

                    <textarea
                        ref={inputRef}
                        disabled={inputRef}
                        defaultValue={item.distance}
                        onKeyPress={(e) => update(item.id, item.distance= inputRef.current.value, e)}
                    />
                        <button onClick={() => {
                             changeFocus()
                        }}> Ред. </button>

                    <button onClick={()=>{
                        dispatch(deleteItemsAA(item.id));
                    }}> x
                    </button>
                </li>
            </div>
        )

};
export default List;