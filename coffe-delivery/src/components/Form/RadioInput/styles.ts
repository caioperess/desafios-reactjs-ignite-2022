import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const Container = styled.label`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-button']};
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  border-radius: 6px;
  border: 1px solid transparent;

  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;
  ${mixins.fonts.buttonM};

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors['purple-200']};
    border-color: ${({ theme }) => theme.colors['purple-400']};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors['purple-400']};
  }
`
