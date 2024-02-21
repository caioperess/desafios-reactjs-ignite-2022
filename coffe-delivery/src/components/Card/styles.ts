import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  padding: 0 1.25rem;

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  img {
    margin-top: -20px;
    max-width: 120px;
    max-height: 120px;
  }
`

export const Tags = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    ${mixins.fonts.tag}
    background: ${(props) => props.theme.colors['yellow-200']};
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['yellow-700']};

    border-radius: 100px;
  }
`

export const Title = styled.h3`
  ${mixins.fonts.titleS}
  color: ${(props) => props.theme.colors['base-subtitle']};

  margin-top: 1rem;
`

export const Description = styled.p`
  ${mixins.fonts.textS}
  color: ${(props) => props.theme.colors['base-label']};

  margin-top: 0.5rem;
`

export const Control = styled.div`
  width: 100%;
  margin-top: 2.063rem;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 1.25rem;

  > button {
    background-color: ${(props) => props.theme.colors['purple-700']};
    border-radius: 8px;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    svg {
      color: ${(props) => props.theme.colors['base-card']};
    }

    &:hover {
      background-color: ${(props) => props.theme.colors['purple-400']};
    }
  }
`
