import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/index';
import logMiddleware from '../middleware/log';
import apiMiddleware from '../middleware/api';

// const initialState = {
// 	recipes: [
// 		{name: 'Omelete'}
// 	],
// 	ingredients: [
// 		{
// 			recipes: 'Omelete',
// 			name: 'Eggs',
// 			quantity: 2
// 		}]
// };

// const store = createStore(rootReducer, initialState, applyMiddleware(logMiddleware, apiMiddleware));
const store = createStore(rootReducer, applyMiddleware(logMiddleware, apiMiddleware));
export default store;