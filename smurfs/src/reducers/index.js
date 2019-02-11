import { SUCCESS, SELECT, LOADING, FAILURE } from '../actions';


const initialState = {
  smurfs: [],
  loading: false,
  selectedID: '',
  error: null
}


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