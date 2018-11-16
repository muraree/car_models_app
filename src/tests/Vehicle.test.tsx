import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import VehicleComponent from '../containers/VehicleContainer'
import reducers from '../reducers/index'

configure({ adapter: new Adapter() })

it('renders VehicleComponent without crashing', () => {
const store = createStore(reducers)

  shallow(<Provider store={store}>
      <VehicleComponent/>
    </Provider>
  )
})
