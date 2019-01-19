###State as a Database || Chapter 3

* Normalize State Example :

    const state = {
        books: {
            21: {
                id: 21,
                name: 'Breakfast',
                recipes: [63, 78, 221]
            }
        },
        recipes: {
            63: {
                id: 63,
                book: 21,
                name: 'Omelette',
                favorite: true,
                preparation: 'How to prepare...',
                ingredients: [152, 121]
            },
            78: {...},
            221: {...}
        }
    }

* Reducers for adding a new ingredient Example 

    const booksReducer = (books, action) => {
        // Not related to ingredients any more
    };

    const recipeReducer = (recipe, action) => {
        switch (action.type) {
            case ADD_INGREDIENT:
                return Object.assign({}, recipe, {
                    ingredients: [...recipe.ingredients, action.payload.id]
            });
        }
        return recipe;
    };


* Getting a list of favorite recipes is much simpler in the normalized state : 

    const getFavorites = (state) =>
        state.recipes.filter(recipe => favorite);


* Keeping a Normalized State

    - Data returned from '/recipes/123, the data is "denormalized data"

    {
        id: 63,
        name: 'Omelette',
        favorite: true,
        preparation: 'How to prepare...',
        ingredients: [
            {
                id: 5123,
                name: 'Egg',
                quantity: 2
            },
            {
                id: 729,
                name: 'Milk',
                quantity: '2 cups'
            }
        ]
    };

* Building the Generic Action

    - Sample UPDATE_DATA action with good data dummy structure to solve "denormalized data"

    const updateData = ({

        type: UPDATE_DATA,
        payload: {
            recipes: {
                63: {
                    id: 63,
                    name: 'Omelette',
                    favorite: true,
                    preparation: 'How to prepare...',   
                    ingredients: [5123, 729]
                }
            },
            ingredients: {
                5123: {
                    id: 5123,
                    name: 'Egg',
                    quantity: 2
                },
                729: {
                    id: 729,
                    name: 'Milk',
                    quantity: '2 cups'
                }
            }
        }
    });

    - Using this approach, our recipes reducer’s support for UPDATE_DATA can be as simple as

    - Recipes reducer support for UPDATE_DATA :
 
    const recipesReducer = (state, action) => {
        switch(action.type) {
            case UPDATE_DATA:
            if (!('recipes' in action.payload)) return state;
            
            return Object.assign({}, state, {
                recipes: Object.assign({}, state.recipes, action.payload.recipes)
            });
        }
    };


* Normalizing the Data

    - Using "Normalizr" Library : https://github.com/paularmstrong/normalizr

* Persisting State  

    - Using : https://github.com/rt2zz/redux-persist

    Real-World State

* Structure of a Common State

    - Sample State

        const state = { 
            books: { }, 
            recipes: { }, 
            ingredients: { }, 
            ui: { activeRequests: 0 }, 
            currentUser: { 
                name: 'Kipi', 
                accessToken: 'topsecrettoken' 
            } 
        };

    - Keeping the State Manageable

    "To make things as simple as possible, it is best to have a reducer for each key in the base state"

    - Large Nested state :

        const state = {

        db: {
            books: { },
            recipes: { },
            ingredients: { },
        },
        local: {
            ui: {
                activeRequests: 0
            },
            user: {
                name: 'Kipi',
                accessToken: 'topsecrettoken'
            }
        },
        vendor: {
            forms: {},
            router: {}
        }
        };

    "This allows for easier management of the different parts when deciding what needs to be synced to local storage, or when clearing stale data."

    - What to Put in the State :

        • Should this data be persisted across page refresh? • Should this data be persisted across route changes? 
        
        • Is this data used in multiple places in the UI?

        • Wajib ga data/state ini tetap ada meskipun page di refresh ? 
        • Wajib ga data/state ini tetap ada meskipun ROUTING Page berubah ? 
        • Apakah data ini di gunakan di multiple places in the UI ?

    "If the answer to any of these questions is “yes,” the data should go into the state. If the answer to all of these questions is “no,” it could still go into the state, but it’s not a must"