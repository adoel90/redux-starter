import axios from 'axios';
import { FETCH_RECIPES   } from '../constants/action-types';
import { setRecipe } from '../action/recipe';
import * as URL from '../db/db.json';

// const URL = db;

function fetchData(url, callback) {

    console.log(url);

    // axios
    //     .get(url)
    //     .then(callback)
    //     .catch((err) => console.log(`Error fetching recipes: ${ err }`))

    fetch(url)
        .then((response) => {   
                console.log(response);
                if (response.status !== 200) {
                console.log(`Error fetching recipes: ${ response.status }`);
            } else {
                response.json().then(callback);
            }
        })
        .catch((err) => console.log(`Error fetching recipes: ${ err }`))
}

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
    if(action.type === FETCH_RECIPES){
        fetchData(URL, (data) => dispatch(setRecipe(data)));
    }

    next(action);
};

export default apiMiddleware;

