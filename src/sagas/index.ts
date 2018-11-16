import { all } from 'redux-saga/effects'
import { vehicleSaga } from './vehicleSaga'

export default function* rootSaga() {
  yield all([
    ...vehicleSaga,
  ])
}