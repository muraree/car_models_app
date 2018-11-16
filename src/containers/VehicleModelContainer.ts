import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { modelsByMakeId, modelsByMakeYear } from '../actions/vehicleAction'
import VehicleModelComponent from '../components/VehicleModelComponent'

export function mapStateToProps(state: IVehicleState) {
  return {
    loaded: state.vehicle.loaded,
    models: state.vehicle.models
  }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    modelsByMake: (id: number) => {
      dispatch(modelsByMakeId(id))
    },
    modelsByMakeYear:  (id: number, year: number) => {
      dispatch(modelsByMakeYear(id, year))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleModelComponent)
