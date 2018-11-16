import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import VehicleModelComponent from '../containers/VehicleModelContainer'
import reducers from '../reducers/index'

configure({ adapter: new Adapter() })

const match = {
  params: {
    id: 0
  }
}

it('renders VehicleModelComponent without crash', () => {
  const store = createStore(reducers)

  shallow(<Provider store={store}>
      <VehicleModelComponent
        match={match}
        options={[]}
      />
    </Provider>
  )
})
