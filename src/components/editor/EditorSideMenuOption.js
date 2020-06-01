import React, { Component } from "react";

import "./EditorSideMenuOption.css";

class Addable extends Component {
  handleDragStart(e) {
    e.dataTransfer.setData("text/html", e.target.dataset.itemType);
  }
  render() {
    return (
      <div
        className="addable"
        draggable="true"
        data-item-type={this.props.itemType}
        onDragStart={this.handleDragStart}
      >
        <i className="material-icons">{this.props.icon}</i>
      </div>
    );
  }
}

export default Addable;
