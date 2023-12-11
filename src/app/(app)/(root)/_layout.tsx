import type { IconProps } from '@tamagui/helpers-icon';
import { Brush, Cog, Newspaper } from '@tamagui/lucide-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useTheme } from 'tamagui';

import { useSelectedTheme } from '@/hooks';

type TabIconsType = {
  [key: string]: (props: IconProps) => JSX.Element;
};

export const unstable_settings = {
  initialRouteName: 'index',
};

const tabsIcons: TabIconsType = {
  index: (props: IconProps) => <Brush {...props} />,
  feeds: (props: IconProps) => <Newspaper {...props} />,
  settings: (props: IconProps) => <Cog {...props} />,
};

type BarIconType = {
  name: string;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

type TabType = {
  name: string;
  label: string;
};

const tabs: TabType[] = [
  {
    name: 'index',
    label: 'Style',
  },
  {
    name: 'feeds',
    label: 'Feed',
  },
  {
    name: 'settings',
    label: 'Settings',
  },
];

export default function Layout() {
  const theme = useTheme();
  const { selectedTheme } = useSelectedTheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor:
          selectedTheme === 'dark' ? theme.gray11?.val : theme.gray11.val,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
        headerShown: false,
      })}
    >
      {tabs.map(({ name, label }) => (
        <Tabs.Screen
          name={name}
          key={name}
          options={{
            title: label,
            tabBarTestID: `${name}-tab`,
          }}
        />
      ))}
    </Tabs>
  );
}
