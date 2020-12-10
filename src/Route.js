import { Provider } from 'react-redux'
import React, {Fragment} from "react";
import App from "./pages/app/App";
import store from "./redux/store"
import color from "./constante/Color";

function Route() {
  return (
      <Provider store={store}>
          <Fragment>
              <App style={{backgroundColor : color.red_principal}}/>
          </Fragment>
      </Provider>
  );
}

export default Route;
