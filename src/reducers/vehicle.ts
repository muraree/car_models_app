import {
  FETCH_ALL_MAKES,
  FETCH_ALL_MAKES_SUCCESS,
} from '../types'

const initialState = {
  loaded: true,
  makes: [],
  models: []
}

export default function(state = initialState, action: IAction) {
  switch(action.type) {
    case FETCH_ALL_MAKES:
      return {
        ...state,
        loaded: false,
      }
    case FETCH_ALL_MAKES_SUCCESS:
      return {
        ...state,
        loaded: true,
        makes: action.makes
      }
    default:
      return state
  }
}