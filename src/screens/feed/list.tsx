import { FlashList } from '@shopify/flash-list';
import { router } from 'expo-router';
import React from 'react';
import { YStack } from 'tamagui';

import type { Post } from '@/api';
import { EmptyList } from '@/components/ui';

import { Card } from './card';

type FeedProps = {
  posts?: Post[];
  isLoading: boolean;
};

export const Feed = ({ posts, isLoading }: FeedProps) => {
  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => (
      <Card
        {...item}
        onPress={() =>
          router.push({
            pathname: '/(app)/(root)/feeds/[feed]',
            params: { feed: item.id },
          })
        }
      />
    ),
    []
  );

  return (
    <YStack flex={1}>
      <FlashList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isLoading} />}
        estimatedItemSize={300}
      />
    </YStack>
  );
};
