import { FeedResponse, ProgramType } from '@/types/feed';

const FEED_ENDPOINT = '/api/feed.json';

export const simulateError = () => new Promise((_, reject) => {
  setTimeout(reject, 1000, {
    message: 'Program type "Documentaries" not found',
    code: 'DOC_404'
  });
});

export const fetchFeed = async (
  type: ProgramType, 
  limit: number = 21, 
  releasedSince: number = 2010,
): Promise<FeedResponse> => {
  if (type === ProgramType.DOCUMENTARY) {
    throw await simulateError();
  }

  const response = await fetch(FEED_ENDPOINT);
  const data: FeedResponse = await response.json();
  const filteredTitles = data.entries
    .filter(item => {
      return item.programType === type && item.releaseYear >= releasedSince;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return new Promise((resolve) => setTimeout(resolve, 1000, {
    total: filteredTitles.length,
    entries: filteredTitles.slice(0, limit)
  }));
}