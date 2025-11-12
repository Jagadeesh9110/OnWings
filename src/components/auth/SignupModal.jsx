import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, toggleSignupModal, toggleLoginModal } from '../../store/slices/userSlice.js';
import Modal from '../common/Modal.jsx';
import Input from '../common/Input.jsx';
import Button from '../common/Button.jsx';
import { UserIcon, LockIcon, MailIcon } from '../icons/Icons.jsx';

const SignupModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.user.showSignupModal);

  const handleClose = () => dispatch(toggleSignupModal());

  const handleSignup = (e) => {
    e.preventDefault();
    // In a real app, you'd dispatch an async thunk to your backend
    const fakeUser = { name: e.target.name.value, email: e.target.email.value };
    dispatch(login(fakeUser)); // Auto-login after signup
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <Input
          label="Full Name"
          id="name"
          name="name"
          type="text"
          placeholder="Demo User"
          icon={<UserIcon className="w-5 h-5 text-gray-400" />}
          required
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          icon={<MailIcon className="w-5 h-5 text-gray-400" />}
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
          Create Account
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{' '}
        <button
          onClick={() => {
            dispatch(toggleSignupModal());
            dispatch(toggleLoginModal());
          }}
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Log in
        </button>
      </p>
    </Modal>
  );
};

export default SignupModal;