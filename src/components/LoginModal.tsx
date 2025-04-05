
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import NostrLogin from './NostrLogin';
import { Button } from './ui/button';

interface LoginModalProps {
  children?: React.ReactNode;
}

const LoginModal = ({ children }: LoginModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button variant="outline">Login</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-gymstr-beige/10 bg-transparent p-0">
        <NostrLogin />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
