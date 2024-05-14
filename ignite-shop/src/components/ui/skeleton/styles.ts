import { keyframes, styled } from '@/styles/index';

const animationPulse = keyframes({
  '0%': { opacity: 1 },
  '50%': { opacity: 0.5 },
  '100%': { opacity: 1 },
});

export const SkeletonContainer = styled('div', {
  borderRadius: 8,
  background: '$gray100',
  animation: `${animationPulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});
