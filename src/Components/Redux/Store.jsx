import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./Reducers";

const Store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;



