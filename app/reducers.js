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

function todos(state = [], action) {
   switch (action.type) {
      case COMPLETE_TODO:
         console.log(state);

         return _.map(state, function(t) {
            console.log(t);

            console.log('t.id: ' + t.id);
            console.log('action.id: ' + action.id);


            if (t.id !== action.id) {
               console.log('this is not the task we are looking for');
               return t;
            }

            console.log('flipping in progress');
            return Object.assign({}, t, {
               completed: !state.completed
            });
         });


         // state.map(t =>

         //)
         // return [
         //    ...state.slice(0, action.index),
         //    Object.assign({}, state[action.index], {
         //       completed: true
         //    }),
         //    ...state.slice(action.index + 1)
         // ]
      case ADD_TODO:
         return [
            ...state,
            {
               text: action.text,
               completed: false
            }
         ]
      default:
         return state
   }
}

const todoApp = combineReducers({
   visibilityFilter,
   todos
})

export default todoApp
