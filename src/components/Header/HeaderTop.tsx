import React from 'react';
import styled from '@emotion/styled';
import { SHADES, COLORS, GRADIENTS } from '@/shared/theme';
import ContentBox from '../ContentBox';

const HeaderTopWrapper = styled.nav`
  display: flex;
  height: 50%;
  color: ${SHADES.WHITE};
  background-image: ${GRADIENTS.PRIMARY};
  background-color: ${COLORS.PRIMARY[5]};
`;

const HeaderTopBrand = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const HeaderTopActions = styled.nav`
  display: inline-flex;
  flex-grow: 0;
`;

const HeaderTopActionsItem = styled.a<{ highlight?: boolean }>`
  margin: 0.5rem;
  font-weight: 700;
  text-decoration: none;
  color: ${SHADES.WHITE};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 200ms ease;
  ${({ highlight }) => highlight ? `
    background-image: ${GRADIENTS.DARK};
    background-color: ${COLORS.DARK[5]};
    &:hover, &:focus {
      background-color: ${COLORS.DARK[6]};
      background-image: none;
    }
  `: `
    &:hover, &:focus {
      background-color: ${COLORS.PRIMARY[7]};
    }
  `}
`;

const HeaderTop = () => {

  return (
    <HeaderTopWrapper>
      <ContentBox className="items-center">
        <HeaderTopBrand>DEMO Streaming</HeaderTopBrand>
        <HeaderTopActions>
          <HeaderTopActionsItem>Log in</HeaderTopActionsItem>
          <HeaderTopActionsItem highlight>Start your free trial</HeaderTopActionsItem>
        </HeaderTopActions>
      </ContentBox>
    </HeaderTopWrapper>
  );
};

export default HeaderTop;