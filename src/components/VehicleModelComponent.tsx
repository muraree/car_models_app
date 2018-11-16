import * as React from 'react';
import Loader from 'react-loader'
import Select from 'react-select';
import ReactTable from 'react-table'

class VehicleModelComponent extends React.Component<IVehicleModelProps, IVehicleModelStates> {
  public options = [
    {label: 'Select all', value: 'Select all' },
    {label: '2011', value: '2011' },
    {label: '2012', value: '2012' },
    {label: '2013', value: '2013' },
    {label: '2014', value: '2014' },
    {label: '2015', value: '2015' },
    {label: '2016', value: '2016' },
    {label: '2017', value: '2017' },
    {label: '2018', value: '2018' },
  ]

  constructor(props: IVehicleModelProps) {
    super(props)
    this.state = {
      year: {label: '', value: ''}
    }
  }

  public async componentDidMount() {
    await this.props.modelsByMake(this.props.match.params.id)
  }

  public handleChange = async (selectedOption: ISelectValue) => {
    if (selectedOption.value === 'Select all') {
      this.setState({ year: selectedOption })
      await this.props.modelsByMake(this.props.match.params.id)
    } else {
      this.setState({ year: selectedOption })
      await this.props.modelsByMakeYear(this.props.match.params.id, Number(selectedOption.value))
    }
  }

  public render() {
    return (
      <div className='text-center'>
        <h2> Vehicle Models Reports </h2>
        <div className='col-md-4 offset-md-4'>
          <Select
            value={this.state.year}
            onChange={this.handleChange}
            options={this.options}
          />
        </div>
        <Loader loaded={this.props.loaded} className="spinner">
          <ReactTable
            data={this.props.models[this.props.match.params.id]}
            columns={[
              {
                Header: "ID",
                accessor: "Model_ID",
              },
              {
                Header: "Name",
                accessor: "Model_Name",
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </Loader>
      </div>
    )
  }
}

export default VehicleModelComponent