import { useCart } from '@/context/cartContext'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Aside, Container } from './styles'

export function Header() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to="/">
        <img src="/logo.png" alt="" />
      </Link>

      <Aside>
        <button type="button">
          <MapPin size={22} weight="fill" />
          <span>Marília, SP</span>
        </button>

        <Link to="/checkout">
          <ShoppingCart size={22} weight="fill" />

          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}
