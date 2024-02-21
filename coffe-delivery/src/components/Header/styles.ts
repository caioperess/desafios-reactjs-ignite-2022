import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    width: 85px;
    height: 40px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    background: ${(props) => props.theme.colors['purple-200']};
    padding: 0.5rem;

    border-radius: 8px;

    display: flex;
    align-items: center;

    gap: 0.25rem;

    span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.colors['purple-700']};
    }

    svg {
      color: ${(props) => props.theme.colors['purple-400']};
    }
  }

  a {
    width: 40px;
    background: ${(props) => props.theme.colors['yellow-200']};
    padding: 0.5rem;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    text-decoration: none;

    svg {
      color: ${(props) => props.theme.colors['yellow-700']};
    }

    span {
      ${mixins.fonts.textS}
      background: ${(props) => props.theme.colors['yellow-700']};
      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      color: ${(props) => props.theme.colors.white};
      font-weight: bold;
      text-align: center;

      position: absolute;
      top: 0;
      right: 0;
      transform: translate(40%, -40%);
    }
  }
`
