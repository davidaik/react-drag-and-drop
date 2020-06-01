import React, { Component } from "react";

import "./style.css";

class Table extends Component {
  getCols(type, data) {
    return data.map((cell, i) => {
      return type === "header" ? (
        <th key={i}>{cell}</th>
      ) : (
        <td key={i}>{cell}</td>
      );
    });
  }

  render() {
    var rows = this.props.data.map((row, i) => {
      return <tr key={i}>{this.getCols(row.type, row.cols)}</tr>;
    });
    return (
      <table style={this.props.style}>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Table;
