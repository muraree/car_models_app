import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchAllMakes, fetchAllModalsByMake, fetchAllModalsByMakeYear } from '../apis/vehicles'
import { FETCH_ALL_MAKES, FETCH_ALL_MAKES_FAILURE, FETCH_ALL_MAKES_SUCCESS,
  FETCH_MODELS_BY_MAKE, FETCH_MODELS_BY_MAKE_FAILURE, FETCH_MODELS_BY_MAKE_SUCCESS,
          FETCH_MODELS_BY_MAKEYEAR, FETCH_MODELS_BY_MAKEYEAR_FAILURE, FETCH_MODELS_BY_MAKEYEAR_SUCCESS
} from '../types'

function* fetchMakes (action: IAction) {
  const response = yield call(fetchAllMakes, action)
  if(response.ok) {
    yield put({type: FETCH_ALL_MAKES_SUCCESS, makes: response.data.Results})
  } else {
    yield put({type: FETCH_ALL_MAKES_FAILURE, errors: response.errors})
  }
}

function* fetchModalsByMake (action: IAction) {
  const response = yield call(fetchAllModalsByMake, action);
  if(response.ok) {
    yield put({type: FETCH_MODELS_BY_MAKE_SUCCESS, models: response.data.Results, id: action.id});
  } else {
    yield put({type: FETCH_MODELS_BY_MAKE_FAILURE, errors: response.errors});
  }
}

function* fetchModalsByMakeYear (action: IAction) {
  const response = yield call(fetchAllModalsByMakeYear, action);
  if(response.ok) {
    yield put({type: FETCH_MODELS_BY_MAKEYEAR_SUCCESS, models: response.data.Results, id: action.id});
  } else {
    yield put({type: FETCH_MODELS_BY_MAKEYEAR_FAILURE, errors: response.errors});
  }
}

export const vehicleSaga = [
  takeLatest(FETCH_ALL_MAKES, fetchMakes),
  takeLatest(FETCH_MODELS_BY_MAKE, fetchModalsByMake),
  takeLatest(FETCH_MODELS_BY_MAKEYEAR, fetchModalsByMakeYear)
]