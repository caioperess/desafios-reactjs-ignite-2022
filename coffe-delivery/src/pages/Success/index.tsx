import { useCart } from '@/context/cartContext'
import { defaultTheme } from '@/styles/theme/default'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useParams } from 'react-router-dom'
import { Container, Heading, InfoBox, InfoRow, OrderInfo } from './styles'

export function Success() {
  const { orders } = useCart()
  const { id } = useParams()

  const order = orders.find((od) => od.id === Number(id))

  return (
    <Container>
      <OrderInfo>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <InfoBox>
          <InfoRow>
            <MapPin
              size={32}
              weight="fill"
              style={{ background: defaultTheme.colors['purple-400'] }}
            />

            <div>
              <span>
                Entrega em{' '}
                <b>
                  {order?.street}, {order?.number}
                  {order?.fullAddress && `-${order.fullAddress}`}
                </b>
              </span>

              <span>
                {order?.neighborhood} - {order?.city}, {order?.state}
              </span>
            </div>
          </InfoRow>

          <InfoRow>
            <Timer
              size={32}
              weight="fill"
              style={{ background: defaultTheme.colors['yellow-400'] }}
            />

            <div>
              <span>Previsão de entrega</span>

              <span>
                <b>20 min - 30 min</b>
              </span>
            </div>
          </InfoRow>

          <InfoRow>
            <CurrencyDollar
              size={32}
              style={{ background: defaultTheme.colors['yellow-700'] }}
            />

            <div>
              <span>Pagamento na entrega</span>

              <span>
                <b>
                  {order?.paymentMethod === 'credit' && 'Cartão de Crédito'}
                  {order?.paymentMethod === 'debit' && 'Cartão de Débito'}
                  {order?.paymentMethod === 'cash' && 'Dinheiro'}
                </b>
              </span>
            </div>
          </InfoRow>
        </InfoBox>
      </OrderInfo>

      <div>
        <img src="/images/success.svg" alt="" />
      </div>
    </Container>
  )
}
