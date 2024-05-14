import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import {
  StyledDialogClose,
  StyledDialogContent,
  StyledDialogFooter,
  StyledDialogHeader,
  StyledDialogOverlay,
  StyledDialogTitle,
} from './styles';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = StyledDialogClose;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ ...props }, ref) => <StyledDialogOverlay ref={ref} {...props} />);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <StyledDialogContent ref={ref} {...props}>
      {children}
      <StyledDialogClose>X</StyledDialogClose>
    </StyledDialogContent>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogHeader {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogFooter {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ ...props }, ref) => <StyledDialogTitle ref={ref} {...props} />);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ ...props }, ref) => <DialogPrimitive.Description ref={ref} />);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
};

