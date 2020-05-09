import styled from '@emotion/styled';
import { BREAKPOINT } from '@/shared/theme';

const TileLayout = styled.div`
  display: flex;
  padding: 2rem 0;
  align-items: flex-start;
  flex-flow: wrap;
  justify-content: flex-start;

  & > :not(:last-of-type) {
    margin-left: 1rem;
    margin-bottom: 2rem;
  }
  @media (max-width: ${BREAKPOINT.lg}) {
    justify-content: space-evenly;
  }
`;

export default TileLayout;
