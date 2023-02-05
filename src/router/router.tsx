import { HomePage } from 'pages';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME}>
      <Route element={<HomePage />} />
      <Route path={ROUTE.PROFILE} />
      <Route path={ROUTE.SIGN_IN} />
      <Route path={ROUTE.SIGN_IN} />
    </Route>
  ),
);
