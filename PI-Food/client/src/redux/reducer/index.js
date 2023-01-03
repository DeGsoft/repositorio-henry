import {
   GET_ALL_RECIPIES,
   GET_RECIPIE_DETAILS,
   CREATE_RECIPIES,
   ORDER_RECIPIES,
   FILTER_RECIPIES,
   SEARCH_RECIPIES
} from '../actions';

const initialState = {
   recipies: [],
   detailRecipies: {},
   orderRecipies: '',
   filterRecipies: '',
   searchRecipies: ''
};

export default function rootReducer(state = initialState, action) {
   switch (action.type) {
      case GET_ALL_RECIPIES:
         return {
            ...state,
            recipies: action.payload,
            orderRecipies: '',
            filterRecipies: '',
            searchRecipies: ''
         };
      case GET_RECIPIE_DETAILS:
         return {
            ...state,
            detailRecipies: action.payload,
         };
      case CREATE_RECIPIES:
         return {
            ...state,
            recipies: [...state.recipies, action.payload],
         };
      case ORDER_RECIPIES:
         return {
            ...state,
            orderRecipies: action.payload,
         };
      case FILTER_RECIPIES:
         return {
            ...state,
            filterRecipies: action.payload,
         };
      case SEARCH_RECIPIES:
         return {
            ...state,
            searchRecipies: action.payload,
         };
      default:
         return state;
   }
};
