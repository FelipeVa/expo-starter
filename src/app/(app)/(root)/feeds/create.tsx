import React from 'react';

import { FocusAwareStatusBar } from '@/components/ui';
import { AddPost } from '@/screens';

export default function Page() {
  return (
    <>
      <FocusAwareStatusBar />

      <AddPost />
    </>
  );
}
