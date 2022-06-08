/* global Prism */
import 'prismjs';

import * as React from 'react';
import copy from 'copy-to-clipboard';


// json object to iterate over a html table
const tableData = {
    headers: [
        'Local Survey ID',
        'Observation Number',
        'Station Number',
        'Longitude',
        'Latitude',
        'Observation Date',
        'Ground Elevation'
    ],
    rows: [
        [
            '1',
            '1',
            '1',
            '-59.43',
            '-27.18',
            '2018-01-01',
            '0'
        ],
        [
            '2',
            '2',
            '2',
            '-59.43',
            '-27.18',
            '2018-01-01',
            '0'
        ],
        [
            '3',
            '3',
            '3',
            '-59.43',
            '-27.18',
            '2018-01-01',
            '0'
        ],
        [
            '4',
            '4',
            '4',
            '-59.43',
            '-27.18',
            '2018-01-01',
            '0'
        ],
        [
            '5',
            '5',
            '5',
            '-59.43',
            '-27.18',
            '2018-01-01',
            '0'
        ]
    ]      
}
export function DataTable() {
  
  return (
    <div className='border'>
      {/* A table with some data */}
        {/* iterate over table data */}
        <table>
            <thead>
                <tr>
                    {/* iterate over table headers */}
                    {tableData.headers.map((header, i) => (
                        <th key={i}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='table'>
                {/* iterate over table rows */}
                {tableData.rows.map((row, i) => (
                    <tr key={i}>
                        {/* iterate over table columns */}
                        {row.map((column, i) => (
                            <td key={i}>{column}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

        {/* <table >
            <thead >
                <tr>
                    
                </tr>
            </thead>
            <tbody className="table">
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>-59.43</td>
                    <td>-27.18</td>
                    <td>2018-01-01</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>-59.43</td>
                    <td>-27.18</td>
                    <td>2018-01-01</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>-59.43</td>
                    <td>-27.18</td>
                    <td>2018-01-01</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table> */}
        <style jsx>
            {`
            .table{
                position: relative;
                background: var(--code-background);
                border-radius: 4px;
                background-border: 1px solid var(--code-background-border);
            }
            `}
        </style>
    </div>
  );
}
