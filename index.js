import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { columnArray, rowArray } from './sampleData'

class Table extends Component {

    state = {
        columnHeaders: [],
        rowArray: []
    }

    componentDidMount() {
        this.makeObj(columnArray, rowArray)
        // this.setState({ columnHeaders: columnArray })
        // this.setState({ rowArray: rowArray },
        //     function () { console.log('state', this.state) })

    }

    makeObj = (columnArray, rowArray) => {
        const arrayTable = []
        const obj = {}
        let x = 0;

        for (let i = 0; i < columnArray.length; i++) {

            Object.defineProperty(obj, columnArray[i], { value: rowArray[x][i], configurable: true })

            arrayTable.push(obj)
            console.log('obj', obj)
            console.log('arrT', arrayTable)
            x++
        }
    }

    // createTable = (rowArray) => {
    //     var table = document.createElement('table');
    //     var tableBody = document.createElement('tbody');
      
    //     rowArray.forEach(function(rowData) {
    //       var row = document.createElement('tr');
      
    //       rowData.forEach(function(cellData) {
    //         var cell = document.createElement('td');
    //         cell.appendChild(document.createTextNode(cellData));
    //         row.appendChild(cell);
    //       });
      
    //       tableBody.appendChild(row);
    //     });
      
    //     table.appendChild(tableBody);
    //     document.body.appendChild(table);
    //   }

      

    // makeObj = (columnArray, rowArray) => {
    //     const arrayTable = []
    //     const obj = {}

    //     rowArray.forEach(function (rowArray) {
    //         console.log(rowArray)
    //         Object.defineProperty(obj, columnArray[0], { value: rowArray[0], configurable: true })
    //         arrayTable.push(obj)
    //         console.log('obj', obj, 'arrT', arrayTable)

    //     })
    // }

    // setColumnHeaders = (columnArray) => {
    //     const headers = []
    //     for (let i = 0; i < columnArray.length; i++) {
    //         headers.push(columnArray[i])
    //         console.log('h', headers)
    //     }

    //     this.setColumnState(headers)
    // }

    // setColumnState = (columnArray) => {
    //     this.setState({columnHeaders: columnArray}, 
    //         function () {console.log('state', this.state.columnHeaders)})
    // }

    // combineArrays = (columnArray, rowArray) => {
    //     for (let i = 0; i < columnArray.length; i++) {
    //         for (let j = 0; j < rowArray.length; j++) {
    //             let combinedArray = [columnArray[i] + rowArray[j]]
    //             console.log(combinedArray)
    //         }

    //     }

    // }

    render() {

        console.log('c', columnArray)
        console.log('r', rowArray)

        return (
            <div>
                {/* {this.createTable(rowArray)} */}
                <table>

                    {/* <thead>
                        <tr>
                            {columnArray.map(column => <th key={column}>{column}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        
                            {rowArray.map(row => 
                                row.map(data => <td>{data}</td>))}
                        
                    </tbody> */}
                    {/* <thead>
                        <tr>
                            {columnArray.map(column => <tr key={column}>

                                </tr>)}
                            <th>{columnArray[0]}</th>
                            <th>{columnArray[1]}</th>
                            <th>{columnArray[2]}</th>
                            <th>{columnArray[3]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowArray.map(row => <tr key={row}>
                            <td className={`row-${columnArray[0]}`}>{row[0]}</td>
                            <td className={`row-${columnArray[1]}`}>{row[1]}</td>
                            <td className={`row-${columnArray[2]}`}>{row[2]}</td>
                            <td className={`row-${columnArray[3]}`}>{row[3]}</td>
                            
                        </tr>
                        )}
                    </tbody> */}
                </table>
            </div>
        )
    }
}
Table.propTypes = {

}

export default Table