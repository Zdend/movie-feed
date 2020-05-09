import React from 'react';
import TileLayout from '@/components/TileLayout';
import { useFeed } from '@/hooks/useFeed';
import { ProgramType } from '@/types/feed';
import PageLoader from '@/components/PageLoader';
import GenericError from '@/components/GenericError';
import TitleTile from '@/components/TitleTile';

interface TitleFeedProps {
  type: ProgramType;
  limit?: number;
  releasedSince?: number;
}

const TitleFeed = ({ type, limit, releasedSince }: TitleFeedProps) => {
  const { loading, error, data } = useFeed(type, limit, releasedSince);
  if (loading) {
    return <PageLoader className="my-4" inline data-testid="title-feed__loader" />;
  }
  if (error) {
    return <GenericError className="my-4" data-testid="title-feed__error" />;
  }
  if (!data || data.total < 1) {
    return (
      <h3 className="my-4" data-testid="title-feed__no-data">
        No titles found.
      </h3>
    );
  }

  return (
    <TileLayout>
      {data.entries.map(title => (
        <TitleTile
          key={title.title + title.releaseYear}
          to="#"
          imageUrl={title.images?.['Poster Art']?.url}
        >
          {title.title}
        </TitleTile>
      ))}
    </TileLayout>
  );
};

export default TitleFeed;
