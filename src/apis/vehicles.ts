import {create} from 'apisauce'

const api = create({
  baseURL: `http://localhost:3000/api`,
})

export const fetchAllMakes = async () => {
  const response = await api.get('/v1/cars/get_all_makes')
  return response
}