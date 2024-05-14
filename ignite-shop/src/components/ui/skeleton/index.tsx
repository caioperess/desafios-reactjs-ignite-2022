import { HTMLAttributes, forwardRef } from 'react';
import { SkeletonContainer } from './styles';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width: number | string;
  height: number | string;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, ...props }, ref) => (
    <SkeletonContainer ref={ref} css={{ width, height }} {...props} />
  ),
);
Skeleton.displayName = 'Skeleton';
