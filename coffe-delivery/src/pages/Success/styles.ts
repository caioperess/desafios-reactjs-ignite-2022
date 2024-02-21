import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 5rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  column-gap: 6.375rem;

  img {
    object-fit: contain;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Heading = styled.div`
  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['yellow-700']};
  }

  span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 8px 36px;

  background:
    linear-gradient(
        ${(props) => props.theme.colors.background},
        ${(props) => props.theme.colors.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.colors['yellow-400']},
        ${(props) => props.theme.colors['purple-400']}
      )
      border-box;
  border: 1px solid transparent;
`

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    display: flex;
    flex-direction: column;

    span {
      ${mixins.fonts.textM}
    }
  }

  svg {
    border-radius: 50%;
    padding: 0.5rem;

    color: ${(props) => props.theme.colors.white};
  }
`
