import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/checkout',
        Component: Checkout,
      },
      {
        path: '/order/:id/success',
        Component: Success,
      },
    ],
  },
])
