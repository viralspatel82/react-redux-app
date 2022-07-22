import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Stopwatch from "./Stopwatch";
import Counter from "./Counter";
import store from "./store";
import { Provider } from "react-redux";
import Test from "./Test";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    {/*console.log(store)*/}
    <h1>useReducer Example</h1>
    <StrictMode>
      <Stopwatch />
      <hr></hr>
      <h1>react-redux Example</h1>
      <Counter />
      <hr></hr>
      <h1>Use Data In Other Components</h1>
      <Test />
    </StrictMode>
  </Provider>,
  rootElement
);