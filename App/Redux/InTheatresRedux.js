import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  inTheatresRequest: null,
  inTheatresSuccess: ['payload'],
  inTheatresFailure: null
})

export const InTheatresTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const InTheatresSelectors = {
  getData: state => state.inTheatres
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, data: payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, data: INITIAL_STATE.data })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.IN_THEATRES_REQUEST]: request,
  [Types.IN_THEATRES_SUCCESS]: success,
  [Types.IN_THEATRES_FAILURE]: failure
})
