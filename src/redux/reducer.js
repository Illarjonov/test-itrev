const GET_ITEMS = `GET_ITEMS`;

export  const SORT_BY_DISTANCE_PLUS = 'SORT_BY_DISTANCE_PLUS';
export  const SORT_BY_DISTANCE_MINUS = 'SORT_BY_DISTANCE_MINUS';
export const SORT_BY_DATE_PLUS = 'SORT_BY_DATE_PLUS';
export const SORT_BY_DATE_MINUS = 'SORT_BY_DATE_MINUS';
export const DELETE_ITEM = 'DELETE_ITEM';

export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export const initialState = {
    items: [],
    itemID: null,
    deleteModalHidden: false,
};

export default function reducer(state = initialState, action) {
    console.log(state.itemID);
    switch(action.type) {
        case GET_ITEMS: return {  ...state, items: action.payload};

        case SORT_BY_DISTANCE_PLUS:
            return {
                ...state,
                items: state.items.sort((item, item2) => {
                    const a = item.distance;
                    const b = item2.distance;
                    return a < b ? 1 : a > b ? -1 : 0;
                })
            };

        case SORT_BY_DISTANCE_MINUS:
            return {
                ...state,
                items: state.items.sort((item, item2) => {
                    const a = item.distance;
                    const b = item2.distance;
                    return a < b ? -1 : a > b ? 1 : 0;
                })
            };

        case SORT_BY_DATE_PLUS:
            return {
                ...state,
                items: state.items.sort((item, item2) => {
                    const a = new Date(item.date).getTime();
                    const b = new Date(item2.date).getTime();
                    return a < b ? 1 : a > b ? -1 : 0;
                })
            };

        case SORT_BY_DATE_MINUS:
            return {
                ...state,
                items: state.items.sort((item, item2) => {
                    const a = new Date(item.date).getTime();
                    const b = new Date(item2.date).getTime();
                    return a < b ? -1 : a > b ? 1 : 0;
                })
            };

        case DELETE_ITEM:
            const deleteIndex = state.items.findIndex((x) => x.id === state.itemID);
            state.items.splice(deleteIndex, 1);
            // return {
            //     ...state,
            //     items: state.items.filter((x)=> x.id !== action.payload)
            // };
            return {
                ...state,
                itemID: null,
            };

        case EDIT_ITEM: // => item = payload
            const index = state.items.findIndex((x) => x.id === action.payload.id);
            state.items[index].distance = action.payload.distance;
            state.items[index].date = action.payload.date;
            return {
                ...state,
                items: state.items,
                itemID: null,
            };

        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default: return state;
    }
};

export const getItemsAction = (payload) => ({type: GET_ITEMS, payload});
export const sortByDistancePlusAction = () => ({type: SORT_BY_DISTANCE_PLUS});
export const sortByDistanceMinusAction = () => ({type: SORT_BY_DISTANCE_MINUS});
export const sortByDatePlusAction = () => ({type: SORT_BY_DATE_PLUS});
export const sortByDateMinusAction = () => ({type: SORT_BY_DATE_MINUS});
export const deleteItemAction = () => ({type: DELETE_ITEM });
export const editItemAction = (value) => ({type: EDIT_ITEM, payload: value});
export const addItemAction = (value) => ({type: ADD_ITEM, payload: value});
//export const deleteItemAction = () => ({type: DELETE_ITEM, payload: item.id }); //сделал напрямую
