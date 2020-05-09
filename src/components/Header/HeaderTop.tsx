import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { css } from '@emotion/core';
import { SHADES, COLORS, GRADIENTS, BREAKPOINT, SHADOWS } from '@/shared/theme';
import ContentBox from '../ContentBox';

const HeaderTopWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  height: 50%;
  color: ${SHADES.WHITE};
  background-image: ${GRADIENTS.PRIMARY};
  background-color: ${COLORS.PRIMARY[5]};
  box-shadow: ${SHADOWS.BOTTOM_MEDIUM};
  z-index: 1;
  position: relative;
`;

const headerTopBrandStyle = css`
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  color: ${SHADES.WHITE};

  &:hover,
  &:focus {
    color: ${COLORS.GREY[0]};
  }

  @media (max-width: ${BREAKPOINT.sm}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${BREAKPOINT.xs}) {
    font-size: 1.4rem;
  }
`;

const HeaderTopActions = styled.nav`
  display: inline-flex;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const HeaderTopActionsItem = styled.a<{ highlight?: boolean }>`
  margin: 0.5rem;
  font-weight: 700;
  text-decoration: none;
  color: ${SHADES.WHITE};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 200ms ease;
  &:last-of-type {
    margin-right: 0;
  }
  ${({ highlight }) =>
    highlight
      ? `
    background-image: ${GRADIENTS.DARK};
    background-color: ${COLORS.DARK[5]};
    &:hover, &:focus {
      background-color: ${COLORS.DARK[6]};
      background-image: none;
    }
  `
      : `
    &:hover, &:focus {
      background-color: ${COLORS.PRIMARY[7]};
    }
  `}
  @media (max-width: ${BREAKPOINT.sm}) {
    padding: 0.5rem;
  }
  @media (max-width: ${BREAKPOINT.xs}) { 
    font-size: 0.8rem;
    margin: 0.25rem 0;
    padding: 0.25rem 0.5rem;
  }
`;

const HeaderTop = () => {
  return (
    <HeaderTopWrapper>
      <ContentBox className="items-center">
        <Link to="/" css={headerTopBrandStyle}>
          DEMO Streaming
        </Link>
        <HeaderTopActions>
          <HeaderTopActionsItem>Log in</HeaderTopActionsItem>
          <HeaderTopActionsItem highlight>Start your free trial</HeaderTopActionsItem>
        </HeaderTopActions>
      </ContentBox>
    </HeaderTopWrapper>
  );
};

export default HeaderTop;
