import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { Suspense } from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider, Text, Theme } from 'tamagui';

import { NavigationContainer } from '@/components';
import { useSelectedTheme } from '@/hooks';

import tamaguiConfig from '../../tamagui.config';
import { APIProvider } from './api-provider';

type RootProviderProps = {
  children: React.ReactNode;
};

export function RootProvider({ children }: RootProviderProps) {
  const { selectedTheme } = useSelectedTheme();

  return (
    <SafeAreaProvider>
      <TamaguiProvider defaultTheme={selectedTheme} config={tamaguiConfig}>
        <GestureHandlerRootView style={styles.container}>
          <Suspense fallback={<Text>Loading...</Text>}>
            <Theme name="red">
              <BottomSheetModalProvider>
                <APIProvider>
                  <NavigationContainer>
                    {children}
                    <FlashMessage position="top" />
                  </NavigationContainer>
                </APIProvider>
              </BottomSheetModalProvider>
            </Theme>
          </Suspense>
        </GestureHandlerRootView>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
