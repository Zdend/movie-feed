import { ProgramType, FeedResponse } from '@/types/feed';
import { useState, useEffect } from 'react';
import { fetchFeed } from '@/api/feed';

interface FeedResult {
  loading: boolean;
  error: any;
  data: null | FeedResponse;
}

export const useFeed = (type: ProgramType, limit?: number, releasedSince?: number): FeedResult => {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetchFeed(type, limit, releasedSince);
        setFeed(response);
        setError(null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    })();
  }, [type, limit, releasedSince])

  return {
    loading,
    error,
    data: feed,
  };
};