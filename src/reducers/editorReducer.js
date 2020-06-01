import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  defaultData: {},
  editorContent: [] // Maintains the state of all the user-added components in the editor area
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_DEFAULT_EDITOR_CONTENT_DATA:
      return { ...state, defaultData: action.payload };
    case actionTypes.ADD_EDITOR_CONTENT_ITEM:
      return {
        ...state,
        editorContent: [...state.editorContent, action.payload]
      };
    default:
      return state;
  }
}
