import React from 'react';
import { render } from '@testing-library/react';
import { ProgramType } from '@/types/feed';
import TitleFeed from './TitleFeed';
import { useFeed } from '@/hooks/useFeed';

jest.mock('@/hooks/useFeed', () => ({
  useFeed: jest.fn(() => ({ loading: true }))
}));

const LOADER_ID = 'title-feed__loader';
const ERROR_ID = 'title-feed__error';
const NO_DATA_ID = 'title-feed__no-data';
const TILE_ID = 'title-tile';

describe('TitleFeed', () => {
  const setUseFeedMock = (mockResult: any) => {
    (useFeed as any).mockImplementation(() => mockResult);
  };

  it('renders loader', async () => {
    setUseFeedMock({ loading: true });
    const { getByTestId } = render(<TitleFeed type={ProgramType.MOVIE} />);
    expect(getByTestId(LOADER_ID).textContent).toContain('Loading...');
  });

  it('renders error', async () => {
    setUseFeedMock({ loading: false, error: { message: 'Something went wrong' } });
    const { getByTestId } = render(<TitleFeed type={ProgramType.MOVIE} />);
    expect(getByTestId(ERROR_ID).textContent).toContain('Oops, something went wrong...');
  });

  it('renders no data', async () => {
    setUseFeedMock({
      loading: false,
      data: {
        total: 0,
        entries: []
      }
    });
    const { getByTestId } = render(<TitleFeed type={ProgramType.MOVIE} />);
    expect(getByTestId(NO_DATA_ID).textContent).toContain('No titles found.');
  });

  it('renders movie titles', async () => {
    setUseFeedMock({
      loading: false,
      data: {
        total: 2,
        entries: [
          {
            title: 'Matrix'
          },
          {
            title: 'The Lord of the Rings'
          }
        ]
      }
    });
    const { getAllByTestId } = render(<TitleFeed type={ProgramType.MOVIE} />);
    expect(getAllByTestId(TILE_ID).length).toBe(2);
  });
});
