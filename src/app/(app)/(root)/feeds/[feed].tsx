import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SizableText, YStack } from 'tamagui';

import { usePost } from '@/api';
import { ActivityIndicator, FocusAwareStatusBar } from '@/components/ui';
import { Post } from '@/screens';

type PageProps = { feed: string };

export default function Page() {
  const { feed } = useLocalSearchParams<PageProps>();
  const { data, isLoading, isError } = usePost({
    variables: { id: feed as string },
  });

  if (isLoading) {
    return (
      <YStack flex={1} justifyContent="center">
        <ActivityIndicator />
      </YStack>
    );
  }
  if (isError) {
    return (
      <YStack flex={1} justifyContent="center">
        <FocusAwareStatusBar />
        <SizableText textAlign="center">Error loading post</SizableText>
      </YStack>
    );
  }

  return (
    <>
      <FocusAwareStatusBar />

      <Stack.Screen
        options={{
          title: data.title,
        }}
      />

      <Post post={data} />
    </>
  );
}
