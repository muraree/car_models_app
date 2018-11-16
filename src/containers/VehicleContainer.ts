import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { allMakes } from '../actions/vehicleAction'
import VehicleComponent from '../components/VehicleComponent'

export function mapStateToProps(state: IVehicleState) {
  return {
    loaded: state.vehicle.loaded,
    makes: state.vehicle.makes
  }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    allMakes: () => {
      dispatch(allMakes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleComponent)