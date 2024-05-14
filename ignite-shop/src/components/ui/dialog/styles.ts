import { styled } from '@/styles';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay, {
  position: 'fixed',
  inset: 0,
  zIndex: 999,
  background: '$black_overlay',
});

export const StyledDialogContent = styled(DialogPrimitive.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 999,
  padding: '3rem',
  width: 480,
  height: '100vh',
  background: '$gray800',
  display: 'flex',
  flexDirection: 'column',
});

export const StyledDialogClose = styled(DialogPrimitive.Close, {
  position: 'absolute',
  right: 24,
  top: 24,
  border: 0,
  outline: 0,
  background: 'transparent',
  cursor: 'pointer',
  fontSize: '$xl',
  color: '$gray400',
});

export const StyledDialogHeader = styled('div', {});

export const StyledDialogFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
});

export const StyledDialogTitle = styled(DialogPrimitive.Title, {
  color: '$gray100',
  fontSize: '$lg',
  fontWeight: 'bold',
  marginBottom: 32,
});
