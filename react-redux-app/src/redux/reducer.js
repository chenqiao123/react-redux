import { combineReducers } from 'redux'
// import HomeRootReducer from '../component/';
// import reducerapp from '../component/Redux/reducers';
import appleBasketReducer from '../component/redux/reducers/appleBasketReducer';
import HomeRootReducer from '../container/Home/indexRedux';
const initialState = {
    isPicking: false,
    newAppleId: 3,
    apples: [
        {
            id: 0,
            weight: 233,
            isEaten: false
        },
        {
            id: 1,
            weight: 235,
            isEaten: true
        },
        {
            id: 2,
            weight: 256,
            isEaten: false
        }
    ]
};
// function reducer(state = initialState, action) {
//     return state
// }
const reducerS = combineReducers({
    appleBasket:appleBasketReducer,
    HomeRoot:HomeRootReducer,
});

export default combineReducers({reducerS})