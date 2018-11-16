import {create} from 'apisauce'

const api = create({
  baseURL: `http://localhost:3000/api`,
})

export const fetchAllMakes = async () => {
  const response = await api.get('/v1/cars/get_all_makes')
  return response
}

export const fetchAllModalsByMake = async (action: IAction) => {
  const response = await api.get(`/v1/cars/get_models_for_make_id/${action.id}`)
  return response
}

export const fetchAllModalsByMakeYear = async (action: IAction) => {
  const response = await api.get(`/v1/cars/get_models_for_make_id/${action.id}/make_year/${action.year}`)
  return response
}
