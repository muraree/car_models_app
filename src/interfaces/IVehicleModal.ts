interface IVehicleModelProps {
  modelsByMake: (id: number) => object
  modelsByMakeYear: (id: number, year: number) => object
  match: {
    params: {
      id: number
    }
  }
  options: string[]
  loaded: boolean
  models: []
}

interface IVehicleModelStates {
  year: ISelectValue
}

interface ISelectValue {
  label: string,
  value: string
}