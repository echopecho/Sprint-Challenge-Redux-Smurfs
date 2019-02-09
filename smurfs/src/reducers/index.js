/*
  Be sure to import in all of the action types from `../actions`
*/
import { SUCCESS, SELECT, LOADING, FAILURE } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  loading: false,
  selectedID: '',
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch(action.type) {
    case SUCCESS:
      return { ...state, smurfs: action.payload, selectedID: '', loading: false, error: null }
    case SELECT:
      return { ...state, selectedID: action.id }
    case LOADING:
      return { ...state, smurfs: [], loading: true, error: null }
    case FAILURE:
      return { ...state, smurfs: [], loading: false, error: action.payload }
    default: 
      return state
  }
}