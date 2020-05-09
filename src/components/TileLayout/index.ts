import styled from '@emotion/styled';
import { BREAKPOINT } from '@/shared/theme';

const TileLayout = styled.div`
  display: flex;
  padding: 2rem 0;
  align-items: flex-start;
  flex-flow: wrap;
  justify-content: flex-start;

  & > * {
    margin: 0.5rem;
  }
  @media (max-width: ${BREAKPOINT.lg}) {
    justify-content: space-evenly;
  }
`;

export default TileLayout;
