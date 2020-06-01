import React, { Component } from "react";

import EditorSideMenu from "./EditorSideMenu";
import Editable from "./Editable";

import "./EditorContainer.css";

class EditorContainer extends Component {
  render() {
    return (
      <div id="editor-container">
        <EditorSideMenu />
        <Editable />
      </div>
    );
  }
}

export default EditorContainer;
