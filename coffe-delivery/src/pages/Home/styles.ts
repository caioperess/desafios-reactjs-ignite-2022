import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  padding: 5.875rem 0;
`

export const HeroContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors['base-title']};
  }

  p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['base-subtitle']};
    max-width: 95%;
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${(props) => props.theme.colors['base-text']};

    svg {
      background: lightblue;
      border-radius: 50%;
      padding: 0.5rem;
    }
  }
`

export const HeroContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CoffeeList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  padding-bottom: 5rem;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`
