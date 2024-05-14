import { styled } from '@/styles';

export const ProductListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const ProductContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 20,
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 100,
  background: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  image: {
    objectFit: 'cover',
  },
});

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,

  h3: {
    lineHeight: 1.6,
    fontSize: '$md',
    fontWeight: 400,
    color: '$gray300',
  },

  span: {
    lineHeight: 1.6,
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
  },

  button: {
    marginTop: 6,
    border: 0,
    outline: 0,
    background: 'transparent',
    color: '$green300',
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'left',
    cursor: 'pointer',
  },
});

export const FooterContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  rowGap: 7,
});

export const InfoText = styled('span', {
  variants: {
    color: {
      text: {
        color: '$gray300',
      },
    },
    fontSize: {
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
    },
    align: {
      end: {
        textAlign: 'end',
      },
    },
  },

  color: '$gray100',
  fontSize: '$md',
  lineHeight: 1.6,
  fontWeight: 400,
});

export const CheckoutButton = styled('button', {
  border: 0,
  outline: 0,
  borderRadius: 8,
  background: '$green500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.25rem 2rem',
  marginTop: 57,
  color: '$gray100',
  fontWeight: 'bold',
  fontSize: '$md',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
});
