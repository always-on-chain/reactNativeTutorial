//ACTION CREATOR

import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "./actionsTypes";

export const addPlace = (placeName, placeImage) => {
  return {
    type: ADD_PLACE,
    placeName: placeName,
    placeImage: placeImage
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    placKey: key
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
};
