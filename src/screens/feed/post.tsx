import * as React from 'react';
import { H2, Paragraph, YStack } from 'tamagui';

import { type Post as PostType } from '@/api';

type PostProps = {
  post: PostType;
};

export const Post = ({ post }: PostProps) => {
  return (
    <YStack flex={1} p="$4">
      <H2>{post.title}</H2>
      <Paragraph>{post.body} </Paragraph>
    </YStack>
  );
};
