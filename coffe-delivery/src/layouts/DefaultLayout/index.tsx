import { CartContextProvider } from '@/context/cartContext'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <CartContextProvider>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </CartContextProvider>
  )
}
