import React from 'react';
import styled from '@emotion/styled';

interface PageLoaderProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const PageLoaderStyled = styled.div<Omit<PageLoaderProps, 'children'>>`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  align-items: center;
  justify-content: center;

  ${({ inline }) =>
    !inline
      ? `
    position: fixed;
    z-index: 1000;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `
      : ''}
`;

const PageLoader = ({ children, ...rest }: PageLoaderProps) => {
  return (
    <PageLoaderStyled {...rest}>
      <div className="ml-2">{children || 'Loading...'}</div>
    </PageLoaderStyled>
  );
};

export default PageLoader;
