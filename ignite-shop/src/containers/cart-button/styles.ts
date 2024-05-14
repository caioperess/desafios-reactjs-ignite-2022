import { styled } from '@/styles';

export const CartButtonContainer = styled('button', {
  variants: {
    color: {
      primary: {
        background: '$green500',

        svg: {
          fill: '$white',
        },
      },
      default: {
        background: '$gray800',

        svg: {
          fill: '$gray400',
        },
      },
      active: {
        background: '$gray800',

        svg: {
          fill: '$white',
        },
      },
    },
  },

  position: 'relative',
  outline: 0,
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

export const CartBadge = styled('div', {
  position: 'absolute',
  top: -5,
  right: -5,
  width: 24,
  height: 24,
  background: '$green500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$gray100',
  fontSize: '0.75rem',
  fontWeight: 'bold',

  borderRadius: 999,
  border: `3px solid $gray900`,
});
