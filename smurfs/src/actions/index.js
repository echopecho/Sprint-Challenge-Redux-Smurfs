import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const SELECT = 'SELECT';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurf = () => dispatch => {
  dispatch({ type: LOADING });
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: "Could not get Smurfs to come out and play!"})
    })
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: LOADING });
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: "Could not make Smurf. Wait how does one make a smurf...?"})
    })
}

export const updateSmurf = (smurf, id) => dispatch => {
  dispatch({ type: LOADING });
  axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: "Could not change Smurf. They are perfect the way they are!"})
    })
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: LOADING });
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: "Could not delete Smurf....you monster"})
    })
}

export const selectSmurf = id => {
  return { type: SELECT, id: id }
}