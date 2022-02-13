import * as moment from 'moment/moment';
import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemsAA, editItemAA} from "../redux/asyncAction";
import './ItemList.css'

const Item = ({item, idx}) => {
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

    return(
        <div className='tableRow' key={item.id}>
            <td>
                    <textarea
                        className='textarea'
                        ref={inputDateRef}
                        disabled={inputDateRef}
                        defaultValue={moment(item.date).format("MM.DD.YYYY")}
                        onKeyPress={(e) => updateDate(item.id, item.date = inputDateRef.current.value, e)}
                    >

                    </textarea>
                <button
                    onClick={() => { changeDateFocus() }}
                    className="btn"
                >   <i className="fa fa-pencil-square-o"> </i>
                </button>
            </td>
            <td>
                    <textarea
                        className='textarea'
                        ref={inputRef}
                        disabled={inputRef}
                        defaultValue={item.distance}
                        onKeyPress={(e) => update(item.id, item.distance= inputRef.current.value, e)}
                    />
                <button
                    onClick={() => { changeFocus() }}
                    className="btn"
                >   <i className="fa fa-pencil-square-o"> </i>
                </button>

            </td>
            <td>

                <button
                    onClick={()=>{ dispatch(deleteItemsAA(item.id)) }}
                    className="btn"
                >
                    <i className="fa fa-trash"> </i> Удалить
                </button>
            </td>
        </div>
    )

};
export default Item;