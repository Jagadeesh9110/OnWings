import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, toggleLoginModal, toggleSignupModal } from '../../store/slices/userSlice.js';
import Modal from '../common/Modal.jsx';
import Input from '../common/Input.jsx';
import Button from '../common/Button.jsx';
import { UserIcon, LockIcon } from '../icons/Icons.jsx';

const LoginModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.user.showLoginModal);

  const handleClose = () => dispatch(toggleLoginModal());

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd dispatch an async thunk to your backend
    const fakeUser = { name: 'Demo User', email: e.target.email.value };
    dispatch(login(fakeUser));
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          icon={<UserIcon className="w-5 h-5 text-gray-400" />}
          required
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          icon={<LockIcon className="w-5 h-5 text-gray-400" />}
          required
        />
        <Button type="submit" className="w-full !py-3 text-lg">
          Log In
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-6">
        Don't have an account?{' '}
        <button
          onClick={() => {
            dispatch(toggleLoginModal());
            dispatch(toggleSignupModal());
          }}
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Sign up
        </button>
      </p>
    </Modal>
  );
};

export default LoginModal;