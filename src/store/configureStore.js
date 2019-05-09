import { createStore, combineReducers } from "redux";
import placesReducer from "./reducers/places";

const rootReducer = combineReducers({
  places: placesReducers
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
