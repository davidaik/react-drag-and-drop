import React, { Component } from "react";

import AddableOption from "./EditorSideMenuOption";

import "./EditorSideMenu.css";

class EditorSideMenu extends Component {
  render() {
    return (
      <div id="editor-side-menu">
        <AddableOption itemType="table" icon="table" />
      </div>
    );
  }
}

export default EditorSideMenu;
