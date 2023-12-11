import React from 'react';

import { FocusAwareStatusBar } from '@/components/ui';
import { Onboarding } from '@/screens';

export default function Page() {
  return (
    <>
      <FocusAwareStatusBar />

      <Onboarding />
    </>
  );
}
