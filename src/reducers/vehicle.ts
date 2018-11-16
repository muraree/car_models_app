import {
  FETCH_ALL_MAKES,
  FETCH_ALL_MAKES_SUCCESS,
  FETCH_MODELS_BY_MAKE,
  FETCH_MODELS_BY_MAKE_SUCCESS,
  FETCH_MODELS_BY_MAKEYEAR,
  FETCH_MODELS_BY_MAKEYEAR_SUCCESS
} from '../types'

const initialState = {
  loaded: true,
  makes: [],
  models: []
}

export default function(state = initialState, action: IAction) {
  switch(action.type) {
    case FETCH_ALL_MAKES:
    case FETCH_MODELS_BY_MAKEYEAR:
    case FETCH_MODELS_BY_MAKE:
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
    case FETCH_MODELS_BY_MAKE_SUCCESS:
    case FETCH_MODELS_BY_MAKEYEAR_SUCCESS:
      return {
        ...state,
        loaded: true,
        models:{
          ...state.models,
          [action.id as number]: action.models
        }
      }
    default:
      return state
  }
}