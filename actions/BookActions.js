import {
  BOOKMARK_CLICKED,
  LIKE_CLICKED,
  READ_CLICKED,
  RESET_ACTION
} from "./types";

export const bookmarkClicked = bookmark => {
  console.log("Bookmarked");
  return {
    type: BOOKMARK_CLICKED,
    payload: bookmark
  };
};

export const readClicked = read => {
  console.log("Reading the Book");
  return {
    type: READ_CLICKED,
    payload: read
  };
};

export const likeClicked = like => {
  console.log("Added to favourites");
  return {
    type: LIKE_CLICKED,
    payload: like
  };
};

export const resetActions = () => {
  console.log("actions reset");
  return {
    type: RESET_ACTION
  };
};
