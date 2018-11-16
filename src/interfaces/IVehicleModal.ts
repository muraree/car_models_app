interface IVehicleModelProps {
  modelsByMake: (id: number) => object
  modelsByMakeYear: (id: number, year: number) => object
  match: {
    params: {
      id: number
    }
  }
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => any
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