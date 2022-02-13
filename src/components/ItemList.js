import Item from "./Item";
import React, {useCallback} from "react";
import './ItemList.css';
import {
    sortByDateMinusAction,
    sortByDatePlusAction,
    sortByDistanceMinusAction,
    sortByDistancePlusAction
} from "../redux/reducer";
import {useDispatch} from "react-redux";
import AddItem from "./AddItem";
import Chart from "./Chart";


const ItemList = ({items}) =>{

    const dispatch = useDispatch();

     const sortByDistancePlus = useCallback(() => {dispatch(sortByDistancePlusAction())},[dispatch]);
     const sortByDistanceMinus = useCallback(() => {dispatch(sortByDistanceMinusAction())},[dispatch]);
     const sortByDatePlus = useCallback(() => {dispatch(sortByDatePlusAction())},[dispatch]);
     const sortByDateMinus = useCallback(() => {dispatch(sortByDateMinusAction())},[dispatch]);
 return(
 <div className='table'>
     <div className='tableRow'>
         <td>
             <div>Дата (MM/DD/YYYY)</div>
             <button
                 onClick={ sortByDateMinus }
                 className="btn"
             ><i className="fa fa-sort-amount-asc"> </i>  </button>

             <button
                 onClick={ sortByDatePlus }
                 className="btn"
             ><i className="fa fa-sort-amount-desc"> </i>  </button>
         </td>

         <td>
             <div>Расстояние</div>

              <button
                 onClick={ sortByDistanceMinus }
                 className="btn"
             > <i className="fa fa-sort-amount-asc"> </i>  </button>

             <button
                 onClick={ sortByDistancePlus }
                 className="btn"
             > <i className="fa fa-sort-amount-desc"> </i>  </button>
         </td>

         <td>
             <AddItem/>
         </td>
     </div>

            { items && true //проверить наличие
                ?
                items.map( (item)=> {
                       return  <Item  key={item.id} item={item}/>
                })
                : <div> Данные отсутствуют </div>
            }
     <Chart/>
 </div>
     )
}
export default ItemList;