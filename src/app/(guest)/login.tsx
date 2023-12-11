import React from 'react';

import { FocusAwareStatusBar } from '@/components/ui';
import { Login } from '@/screens';

export default function Page() {
  return (
    <>
      <FocusAwareStatusBar />

      <Login />
    </>
  );
}
