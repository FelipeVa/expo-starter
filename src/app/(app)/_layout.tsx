import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { useIsFirstTime } from '@/hooks';
import { useAuth } from '@/stores';

export const unstable_settings = {
  initialRouteName: '(root)',
};

export default function Layout() {
  const [isFirstTime] = useIsFirstTime();
  const status = useAuth.use.status();

  if (isFirstTime) {
    return <Redirect href="/(guest)/onboarding" />;
  }

  if (!isFirstTime && status === 'signOut') {
    return <Redirect href="/(guest)/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="(root)" />
    </Stack>
  );
}
