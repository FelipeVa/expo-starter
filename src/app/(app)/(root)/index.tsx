import React from 'react';

import { Style } from '@/screens';
import { FocusAwareStatusBar } from '@/components/ui';

export default function Page() {
  return (
    <>
      <FocusAwareStatusBar />

      <Style />
    </>
  );
}
