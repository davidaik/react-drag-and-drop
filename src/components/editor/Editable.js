import React, { Component } from "react";

import Table from "./editor-content-components/Table";

import "./Editable.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  fetchDefaultEditorContentDataAsync,
  addEditorContentItem
} from "../../actions/editorActions";

class Editable extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    this.props.fetchDefaultEditorContentData();
  }

  handleDragOver(e) {
    e.preventDefault();
  }
  handleDrop(e) {
    var itemType = e.dataTransfer.getData("text/html");

    var relativeDropX = e.clientX - this.wrapperRef.current.offsetLeft;
    var relativeDropY = e.clientY - this.wrapperRef.current.offsetTop;

    /*
    Add item to the editor content object in the store.
    This object will be used to render the content in the editor.
    This table object is initialized with default table data
    which was fetched from the server.
    */
    this.props.addEditorContentItem({
      id: Date.now(),
      contentType: itemType,
      content: this.props.defaultData["table"],
      coords: [relativeDropX, relativeDropY]
    });
  }

  getContentItemForType(data) {
    var style = {
      left: data.coords[0] + "px",
      top: data.coords[1] + "px"
    };
    switch (data) {
      case "table":
      default:
        return (
          <Table
            style={style}
            data={data.content}
            key={data.itemId}
          />
        );
    }
  }

  render() {
    /*
    Get a list of item components according to the data
    in the editorContent item in the store.
    */
    var content = this.props.editorContent.map(item => {
      return this.getContentItemForType(item);
    });
    return (
      <div
        id="editable-wrapper"
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        ref={this.wrapperRef}
      >
        {content}
      </div>
    );
  }
}

Editable.propTypes = {
  defaultData: PropTypes.object.isRequired,
  editorContent: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchDefaultEditorContentData: () => {
    dispatch(fetchDefaultEditorContentDataAsync());
  },
  addEditorContentItem: data => {
    dispatch(
      addEditorContentItem(data.id, data.contentType, data.content, data.coords)
    );
  }
});

const mapStateToProps = state => ({
  defaultData: state.editor.defaultData,
  editorContent: state.editor.editorContent
});

export default connect(mapStateToProps, mapDispatchToProps)(Editable);
