export const GET_ALL_RECIPIES = 'GET_ALL_RECIPIES';
export const GET_RECIPIE_DETAILS = 'GET_RECIPIE_DETAILS';
export const CREATE_RECIPIES = 'CREATE_RECIPIES';
export const ORDER_RECIPIES = 'ORDER_RECIPIES';
export const FILTER_RECIPIES = 'FILTER_RECIPIES';
export const SEARCH_RECIPIES = 'SEARCH_RECIPIES';
export const PAGINATE_RECIPIES = 'PAGINATE_RECIPIES';

const host = window.location.protocol + '//' + window.location.host;
const uri = host + '/recipies';

export const getAllRecipies = () => {
    return function (dispatch) {
        return fetch(uri)
            .then(response => response.json())
            .then(json => dispatch({ type: GET_ALL_RECIPIES, payload: json }))
            .catch(err => {
                console.error('Error:', err);
            });
    };
};

export const getRecipieDetail = (id) => {
    return function (dispatch) {
        return fetch(uri + '/' + id)
            .then((response) => response.json())
            .then(json => dispatch({ type: GET_RECIPIE_DETAILS, payload: json }))
            .catch(err => {
                console.error('Error:', err);
            });
    };
};

export const createRecipies = (recipie) => {
    return function (dispatch) {
        return fetch(uri,
            {
                method: 'POST',
                body: JSON.stringify(recipie),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(json => dispatch({ type: CREATE_RECIPIES, payload: json }))
            .catch(err => {
                console.error('Error:', err);
            });
    }
};

export function orderRecipies(payload) {
    try {
        return {
            type: ORDER_RECIPIES,
            payload
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

export function filterRecipies(payload) {
    try {
        return {
            type: FILTER_RECIPIES,
            payload
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

// export function searchRecipies(payload) {
//     try {
//         return {
//             type: SEARCH_RECIPIES,
//             payload
//         }
//     } catch (err) {
//         console.error('Error:', err);
//     }
// }
export const searchRecipies = (payload) => {
    return function (dispatch) {
        return fetch(uri + '?name=' + payload)
            .then((response) => response.json())
            .then(json => dispatch({ type: SEARCH_RECIPIES, payload: json }))
            .catch(err => {
                console.error('Error:', err);
            });
    };
};

export function paginateRecipies(payload) {
    try {
        return {
            type: PAGINATE_RECIPIES,
            payload
        }
    } catch (err) {
        console.error('Error:', err);
    }
}
