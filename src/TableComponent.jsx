import React from 'react';

const TableComponent = ({ data }) => {

  const tableHeaders = Object.keys(data[0]);

  return (
    <table border="2px" style={{textAlign:"center",fontWeight:"bolder"}}>
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {tableHeaders.map((header, headerIndex) => (
              <td key={headerIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;