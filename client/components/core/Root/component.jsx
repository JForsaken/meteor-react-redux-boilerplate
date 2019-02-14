import React from 'react';
import { createRouter, Provider as RouterProvider } from 'fans-router';

import routes from '../../../router/routes';
import App from '../App/container';

export default (
  <RouterProvider router={createRouter(routes)}>
    <App />
  </RouterProvider>
);
