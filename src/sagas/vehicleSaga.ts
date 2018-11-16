import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchAllMakes } from '../apis/vehicles'
import { FETCH_ALL_MAKES, FETCH_ALL_MAKES_FAILURE, FETCH_ALL_MAKES_SUCCESS } from '../types'

function* fetchMakes (action: IAction) {
  const response = yield call(fetchAllMakes, action)
  if(response.ok) {
    yield put({type: FETCH_ALL_MAKES_SUCCESS, makes: response.data.Results})
  } else {
    yield put({type: FETCH_ALL_MAKES_FAILURE, errors: response.errors})
  }
}

export const vehicleSaga = [
  takeLatest(FETCH_ALL_MAKES, fetchMakes)
]