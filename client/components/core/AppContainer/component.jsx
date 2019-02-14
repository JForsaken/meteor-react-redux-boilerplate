import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from '../../../redux/store';

export const store = createStore();


export default (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      {Component}
    </Provider>,
    document.getElementById('app')
  );
};
