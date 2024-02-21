import { useCart } from '@/context/cartContext'
import { ICoffee } from '@/models/Coffee'
import { ShoppingCart } from '@phosphor-icons/react'
import { useState } from 'react'
import { QuantityInput } from '../Form/QuantityInput'
import {
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from './styles'

type Props = {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: Props) {
  const { addItemToCart } = useCart()

  const [quantity, setQuantity] = useState(0)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItemToCart({ id: coffee.id, quantity })
    // setIsItemAdded(true)
    setQuantity(1)
  }

  return (
    <Container>
      <img src={coffee.image} alt={coffee.image} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button type="button">
            <ShoppingCart size={22} weight="fill" onClick={handleAddItem} />
          </button>
        </Order>
      </Control>
    </Container>
  )
}
