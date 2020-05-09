import React from 'react';
import BasicLayout from '@/components/BasicLayout';
import TitleFeed from '@/containers/TitleFeed';
import { ProgramType } from '@/types/feed';

export default () => {
  return (
    <BasicLayout title="Popular Series">
      <TitleFeed type={ProgramType.SERIES} />
    </BasicLayout>
  );
};
