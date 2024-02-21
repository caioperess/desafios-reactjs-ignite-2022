import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2.5rem;

  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;

  h2 {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const BaseCard = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 8px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressCard = styled(BaseCard)``

export const AddressHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors['yellow-700']};
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const AddressContent = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 1rem 0.75rem;
`

export const PaymentCard = styled(BaseCard)``

export const PaymentHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors['purple-400']};
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const PaymentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`

export const CheckoutContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CheckoutCard = styled(BaseCard)`
  min-width: 450px;
  gap: 1.5rem;

  border-radius: 8px 44px;
`

export const CheckoutItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    margin-right: 20px;
  }
`

export const ItemPrice = styled.span`
  ${mixins.fonts.textM}
  font-weight: bold;
`

export const ItemInfo = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-right: 50px;

  h3 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    button {
      ${mixins.fonts.buttonM}
      color: ${(props) => props.theme.colors['base-text']};

      height: 32px;
      background: ${(props) => props.theme.colors['base-button']};
      border-radius: 8px;
      padding: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      text-transform: uppercase;

      svg {
        color: ${(props) => props.theme.colors['purple-400']};
      }
    }
  }
`

export const Separator = styled.div`
  background: ${(props) => props.theme.colors['base-button']};
  width: 100%;
  height: 1px;
`

export const ItemTotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.colors['base-text']};
    }

    &:last-child {
      span {
        ${mixins.fonts.textL}
        font-weight: bold;
        color: ${(props) => props.theme.colors['base-subtitle']};
      }
    }
  }
`

export const CheckoutButton = styled.button`
  background: ${(props) => props.theme.colors['yellow-400']};
  width: 100%;
  padding: 0.75rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${mixins.fonts.buttonG}
  color: ${(props) => props.theme.colors.white};

  border-radius: 8px;
`

export const PaymentErrorMessage = styled.span`
  ${mixins.fonts.textXS};
  width: 100%;
  font-weight: 400;
  color: red;
`
