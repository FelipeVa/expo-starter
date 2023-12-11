import 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import { RootProvider } from '@/providers';
import { hydrateAuth, useAuth } from '@/stores';

hydrateAuth();
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const status = useAuth.use.status();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterLight: require('@tamagui/font-inter/otf/Inter-Light.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  const hideSplash = React.useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (loaded && status !== 'idle') {
      hideSplash();
    }
  }, [hideSplash, status, loaded]);

  return (
    <RootProvider>
      <Slot />
    </RootProvider>
  );
}
