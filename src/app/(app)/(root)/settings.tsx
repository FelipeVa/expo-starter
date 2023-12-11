import React from 'react';

import { FocusAwareStatusBar } from '@/components/ui';
import { Settings } from '@/screens';

export default function Page() {
  return (
    <>
      <FocusAwareStatusBar />

      <Settings />
    </>
  );
}
