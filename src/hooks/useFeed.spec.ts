import { renderHook, act } from '@testing-library/react-hooks';
import { useFeed } from './useFeed';
import { ProgramType } from '@/types/feed';
import { fetchFeed } from '@/api/feed';

const mockFeed = {
  total: 2,
  entries: [{ title: 'Matrix' }, { title: 'The Lord of the Rings' }]
};

jest.mock('@/api/feed', () => ({
  fetchFeed: jest.fn(() => Promise.resolve(mockFeed))
}));

describe('useFeed', () => {
  it('returns loading state', async () => {
    const { result } = renderHook(() => useFeed(ProgramType.MOVIE));

    expect(result.current.loading).toBe(true);
    await act(fetchFeed as any);
    expect(result.current.loading).toBe(false);
  });

  it('returns data', async () => {
    const { result } = renderHook(() => useFeed(ProgramType.MOVIE));
    await act(fetchFeed as any);
    expect(result.current.data).toMatchObject(mockFeed);
  });
});
