import { router } from 'expo-router';
import React from 'react';

import { useSoftKeyboardEffect } from '@/hooks/use-soft-keyboard-effect';
import { useAuth } from '@/stores';

import type { LoginFormProps } from './login-form';
import { LoginForm } from './login-form';

export const Login = () => {
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();

  const onSubmit: LoginFormProps['onSubmit'] = async () => {
    await signIn({ access: 'access-token', refresh: 'refresh-token' });

    router.replace({
      pathname: '/(app)/(root)/',
    });
  };
  return <LoginForm onSubmit={onSubmit} />;
};
