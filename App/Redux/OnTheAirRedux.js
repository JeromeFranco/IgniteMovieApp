import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  onTheAirRequest: null,
  onTheAirSuccess: ['payload'],
  onTheAirFailure: null
})

export const OnTheAirTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const OnTheAirSelectors = {
  getData: state => state.onTheAir
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
  [Types.ON_THE_AIR_REQUEST]: request,
  [Types.ON_THE_AIR_SUCCESS]: success,
  [Types.ON_THE_AIR_FAILURE]: failure
})
