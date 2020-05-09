import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from '@reach/router';
import Placeholder from '../../../public/images/placeholder.png';
import { COLORS, SHADES } from '@/shared/theme';
import { useImage } from '@/hooks/useImage';

const titleTileStyle = css`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-content: flex-start;
  flex: 0 1 auto;
  transition: all 200ms ease;
  width: 165px;
  &:hover, &:focus {
    transform: scale(1.05);
  }
`;

const TitleTilePoster = styled.div<{ src: string }>`
${({ 
  src, 
}) => `
  background-image: url(${src});
  background-color: ${COLORS.DARK[6]};
`}
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto;
  width: 100%;
  height: 250px;
  color: ${SHADES.WHITE};
  font-size: 1.5rem;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const TitleTileSubtitle = styled.div`
  color: ${COLORS.DARK[5]};
  text-decoration: none;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface TitleTileProps {
  to: string;
  title?: string;
  children: string;
  imageUrl?: string;
}

const TitleTile = ({ 
  to,
  imageUrl,
  title,
  children,
}: TitleTileProps) => {
  const [loaded] = useImage(imageUrl);
  return (
    <Link to={to} css={titleTileStyle}>
      <TitleTilePoster src={loaded ? imageUrl : Placeholder}>{title}</TitleTilePoster>
      <TitleTileSubtitle>{children}</TitleTileSubtitle>
    </Link>
  );
};

export default TitleTile;