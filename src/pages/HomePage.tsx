import React from 'react';
import BasicLayout from '@/components/BasicLayout';
import TitleTile from '@/components/TitleTile';
import TileLayout from '@/components/TileLayout';

export default () => {
  return (
    <BasicLayout title="Popular Titles">
      <TileLayout>
        <TitleTile to="/series" title="SERIES">Popular Series</TitleTile>
        <TitleTile to="/movies" title="MOVIES">Popular Movies</TitleTile>
        <TitleTile to="/documentaries" title="DOC">Documentaries</TitleTile>
      </TileLayout>
    </BasicLayout>
  );
};
