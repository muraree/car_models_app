import * as React from 'react'
import * as Loader from 'react-loader';
import ReactTable from "react-table"
import 'react-table/react-table.css'

class VehicleComponent extends React.Component<IVehicleProps> {
  public async componentDidMount() {
    await this.props.allMakes()
  }

  public render() {
    return (
      <Loader loaded={this.props.loaded} className="spinner">
        <div className='center'>
          <h2> Makes of Vehicle </h2>
          <ReactTable
            data={this.props.makes}
            columns={[
              {
                Cell: ({row}) => {
                  return (
                    <div>
                      <a href={`/make/${row._original.Make_ID}/model`}>
                        {row._original.Make_ID}
                      </a>
                    </div>
                  );
                },
                Header: "ID",
                id: "link",
              },
              {
                Header: "Name",
                accessor: "Make_Name",
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </Loader>
    )
  }

}

export default VehicleComponent