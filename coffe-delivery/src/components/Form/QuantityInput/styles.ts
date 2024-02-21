import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const Container = styled.div`
  min-width: 72px;
  max-height: 32px;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.colors['purple-400']};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-700']};
    }
  }

  span {
    ${mixins.fonts.textM}
    padding-top: 2px;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
