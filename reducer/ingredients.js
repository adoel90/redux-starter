const ingredientsReducer = (ingredients, action) => {
    switch (action.type){
        case 'ADD_INGREDIENT':

            const newIngredient = {
                recipes: action.recipes,
                name: action.name,
                quantity: action.quantity
            };

            return ingredients.concat(newIngredient);
    }   
};

export default ingredientsReducer;