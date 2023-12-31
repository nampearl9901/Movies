import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./redux/reducers/rootReducers";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
