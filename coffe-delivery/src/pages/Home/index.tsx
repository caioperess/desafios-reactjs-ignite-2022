import { CoffeeCard } from '@/components/Card'
import { defaultTheme } from '@/styles/theme/default'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  CoffeeList,
  Heading,
  HeroContainer,
  HeroContentLeft,
  HeroContentRight,
  Info,
} from './styles'

import { coffees } from './../../../data.json'

export function Home() {
  return (
    <div>
      <HeroContainer>
        <HeroContentLeft>
          <Heading>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Heading>

          <Info>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={defaultTheme.colors.background}
                style={{ backgroundColor: defaultTheme.colors['yellow-700'] }}
              />
              Compra simples e segura
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                color={defaultTheme.colors.background}
                style={{ backgroundColor: defaultTheme.colors['base-text'] }}
              />
              Embalagem mantém o café intacto
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
                color={defaultTheme.colors.background}
                style={{ backgroundColor: defaultTheme.colors['yellow-400'] }}
              />
              Entrega rápida e rastreada
            </div>

            <div>
              <Coffee
                size={32}
                weight="fill"
                color={defaultTheme.colors.background}
                style={{ backgroundColor: defaultTheme.colors['purple-400'] }}
              />
              O café chega fresquinho até você
            </div>
          </Info>
        </HeroContentLeft>

        <HeroContentRight>
          <img src="/images/coffee_main.png" alt="" />
        </HeroContentRight>
      </HeroContainer>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
