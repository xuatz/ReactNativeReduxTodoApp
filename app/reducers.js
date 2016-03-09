import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
import { _ } from 'lodash'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
   switch (action.type) {
      case SET_VISIBILITY_FILTER:
         return action.filter
      default:
         return state
   }
}

let count = 0;
function todos(state = [], action) {
   switch (action.type) {
      case COMPLETE_TODO:
         return _.map(state, function(t, index) {
            if (t.id !== action.id) {
               return t;
            }

            return Object.assign({}, t, {
               completed: !state.completed
            });
         });
      case ADD_TODO:
         let res = [
            ...state,
            {
               id: count++,
               text: action.text,
               completed: false
            }
         ];
         console.log(res);
         return res;
      default:
         return state
   }
}

const todoApp = combineReducers({
   visibilityFilter,
   todos
})

export default todoApp
