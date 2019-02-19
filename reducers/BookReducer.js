import {
  BOOKMARK_CLICKED,
  LIKE_CLICKED,
  READ_CLICKED,
  RESET_ACTION
} from "../actions/types";

const INITIAL_STATE = {
  bookmarked: "bookmark-o",
  liked: "heart-o",
  read: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKMARK_CLICKED:
      return { ...state, bookmark: action.payload };
    case LIKE_CLICKED:
      return { ...state, liked: action.payload };
    case READ_CLICKED:
      return { ...state, read: action.payload };
    case RESET_ACTION:
      return state;
    default:
      return state;
  }
};
