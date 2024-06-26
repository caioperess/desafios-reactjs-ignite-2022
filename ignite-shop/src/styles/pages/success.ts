import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    textDecoration: 'none',
    fontSize: '$lg',
    color: '$green500',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const ImagesContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  'div + div': {
    marginLeft: 'calc(-140px / 2.5)',
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
  borderRadius: 999,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4rem',

  img: {
    objectFit: 'cover',
  },
});
