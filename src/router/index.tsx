import { createHashRouter } from 'react-router-dom'
import App from '../App'
import About from '../pages/Home'
import CheckList from '../pages/CheckList'
import Space from '../pages/Space'
import Favorite from '../pages/Favorite'

const router = createHashRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'portal',
        element: <About />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'space',
        element: <Space />,
      },
      {
        path: 'favorite',
        element: <Favorite />,
      },
      {
        path: 'checklist',
        element: <CheckList />,
      },
    ],
  },
])

export default router
