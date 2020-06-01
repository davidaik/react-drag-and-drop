import Axios from "axios";

import * as actionTypes from "./actionTypes";

// Create Redux action creators that return an action
export const setDefaultEditorContentData = data => ({
  type: actionTypes.SET_DEFAULT_EDITOR_CONTENT_DATA,
  payload: data
});

export const fetchDefaultEditorContentDataAsync = () => {
  return async dispatch => {
    Axios.get("/api/editorComponents/defaultEditorData")
      .then(res => {
        dispatch(setDefaultEditorContentData(res.data));
      })
      .catch(err => {
        console.log("Failed to fetch default editor data");
      });
  };
};

export const addEditorContentItem = (itemId, contentType, content, coords) => ({
  type: actionTypes.ADD_EDITOR_CONTENT_ITEM,
  payload: {
    itemId: itemId,
    contentType: contentType,
    content: content,
    coords: coords
  }
});
