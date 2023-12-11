import { router, Stack } from 'expo-router';
import React from 'react';
import { Button } from 'tamagui';

const GoToAddPost = () => {
  return (
    <Button
      onPress={() =>
        router.push({
          pathname: '/(app)/(root)/feeds/create',
        })
      }
      unstyled
      fontSize="$4"
      color="$red9"
    >
      Create
    </Button>
  );
};

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => <GoToAddPost />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Posts',
        }}
      />

      <Stack.Screen
        name="[feed]"
        options={{
          title: 'Post',
        }}
      />

      <Stack.Screen
        name="create"
        options={{
          title: 'Create Post',
        }}
      />
    </Stack>
  );
}
