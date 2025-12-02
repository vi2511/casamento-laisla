import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import OurStory from '../pages/OurStory';
import WeddingInfo from '../pages/WeddingInfo';
import RSVP from '../pages/RSVP';
import Gallery from '../pages/Gallery';
import Gifts from '../pages/Gifts';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'historia', element: <OurStory /> },
      { path: 'informacoes', element: <WeddingInfo /> },
      { path: 'rsvp', element: <RSVP /> },
      { path: 'fotos', element: <Gallery /> },
      { path: 'presentes', element: <Gifts /> }
    ]
  }
]);
