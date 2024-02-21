import { QuantityInput } from '@/components/Form/QuantityInput'
import { Radio } from '@/components/Form/RadioInput'
import { TextInput } from '@/components/Form/TextInput'
import { useCart } from '@/context/cartContext'
import { FormatToCurrency } from '@/utils/currencyFormat'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { Fragment } from 'react'
import { FieldError, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  AddressCard,
  AddressContent,
  AddressHeading,
  CheckoutButton,
  CheckoutCard,
  CheckoutContainer,
  CheckoutItemContainer,
  Container,
  FormContainer,
  ItemInfo,
  ItemPrice,
  ItemTotalPrice,
  PaymentCard,
  PaymentContent,
  PaymentErrorMessage,
  PaymentHeading,
  Separator,
} from './styles'

import { coffees } from '../../../data.json'

const newOrderSchema = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.number({ invalid_type_error: 'Informe o número' }),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrderSchema>

export function Checkout() {
  const {
    cart,
    removeItemFromCart,
    incrementItemQuantityInCart,
    decrementItemQuantityInCart,
    checkoutCart,
  } = useCart()

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<OrderInfo>({
    resolver: zodResolver(newOrderSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  const shippingPrice = 3.5

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  function handleItemIncrement(itemId: string) {
    incrementItemQuantityInCart(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantityInCart(itemId)
  }

  function handleItemRemove(itemId: string) {
    removeItemFromCart(itemId)
  }

  const handleOrderCheckout: SubmitHandler<OrderInfo> = (data) => {
    checkoutCart(data)
  }

  return (
    <Container>
      <form id="addressForm" onSubmit={handleSubmit(handleOrderCheckout)}>
        <FormContainer>
          <h2>Complete seu pedido</h2>

          <AddressCard>
            <AddressHeading>
              <MapPinLine size={22} />

              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>

            <AddressContent>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                error={errors.cep as FieldError}
                {...register('cep', { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street as FieldError}
                {...register('street')}
              />

              <TextInput
                type="number"
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.number as FieldError}
                {...register('number', { valueAsNumber: true })}
              />
              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                error={errors.fullAddress as FieldError}
                {...register('fullAddress')}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood as FieldError}
                {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city as FieldError}
                {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state as FieldError}
                {...register('state')}
              />
            </AddressContent>
          </AddressCard>

          <PaymentCard>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>

            <PaymentContent>
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>

              {errors.paymentMethod ? (
                <PaymentErrorMessage role="alert">
                  {errors.paymentMethod.message}
                </PaymentErrorMessage>
              ) : null}
            </PaymentContent>
          </PaymentCard>
        </FormContainer>
      </form>

      <CheckoutContainer>
        <h2>Cafés selecionados</h2>
        <CheckoutCard>
          {coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <CheckoutItemContainer>
                <img src={coffee.image} alt="" />

                <ItemInfo>
                  <h3>{coffee.title}</h3>

                  <div>
                    <QuantityInput
                      quantity={coffee.quantity}
                      incrementQuantity={() => handleItemIncrement(coffee.id)}
                      decrementQuantity={() => handleItemDecrement(coffee.id)}
                    />

                    <button
                      type="button"
                      onClick={() => handleItemRemove(coffee.id)}
                    >
                      <Trash size={16} />
                      Remover
                    </button>
                  </div>
                </ItemInfo>

                <ItemPrice>{FormatToCurrency(coffee.price)}</ItemPrice>
              </CheckoutItemContainer>

              <Separator />
            </Fragment>
          ))}

          <ItemTotalPrice>
            <div>
              <span>Total de itens</span>
              <span>{FormatToCurrency(totalItemsPrice)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>{FormatToCurrency(shippingPrice)}</span>
            </div>

            <div>
              <span>Total</span>
              <span>{FormatToCurrency(shippingPrice + totalItemsPrice)}</span>
            </div>
          </ItemTotalPrice>

          <CheckoutButton type="submit" form="addressForm">
            CONFIRMAR PEDIDO
          </CheckoutButton>
        </CheckoutCard>
      </CheckoutContainer>
    </Container>
  )
}
