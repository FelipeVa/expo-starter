import { ThemeProvider } from '@react-navigation/native';
import * as React from 'react';

import { useThemeConfig } from '@/hooks';

export const NavigationContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useThemeConfig();

  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
};
