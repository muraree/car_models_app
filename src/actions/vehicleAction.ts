import { FETCH_ALL_MAKES, FETCH_MODELS_BY_MAKE, FETCH_MODELS_BY_MAKEYEAR } from '../types'

export function allMakes() {
  return {
    type: FETCH_ALL_MAKES,
  }
}

export function modelsByMakeId(id: number) {
  return {
    id,
    type: FETCH_MODELS_BY_MAKE
  }
}

export function modelsByMakeYear(id: number, year: number) {
  return {
    id,
    type: FETCH_MODELS_BY_MAKEYEAR,
    year
  }
}
