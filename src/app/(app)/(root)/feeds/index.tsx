import React from 'react';
import { SizableText, YStack } from 'tamagui';

import { usePosts } from '@/api';
import { FocusAwareStatusBar } from '@/components/ui';
import { Feed } from '@/screens';

export default function Page() {
  const { data, isLoading, isError } = usePosts();

  if (isError) {
    return (
      <YStack>
        <SizableText> Error Loading data </SizableText>
      </YStack>
    );
  }

  return (
    <>
      <FocusAwareStatusBar />

      <Feed posts={data} isLoading={isLoading} />
    </>
  );
}
