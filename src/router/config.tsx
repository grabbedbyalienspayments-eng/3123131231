
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import PrivacyPolicy from '../pages/privacy-policy/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/politica-confidentialitate',
    element: <PrivacyPolicy />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
