import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from '@/shared/theme';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const PageHeader = styled.div`
  border-bottom: 1px solid ${COLORS.GREY[1]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageContent = styled.div`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;

interface BasicLayoutProps {
  title?: string;
  titleExtension?: React.ReactNode;
  children: React.ReactNode;
  contentClassName?: string;
}

const BasicLayout = ({
  title,
  titleExtension,
  children,
  contentClassName,
  ...rest
}: BasicLayoutProps) => {
  return (
    <PageWrapper {...rest}>
      {title && (
        <PageHeader data-testid="basic-layout__title">
          <h1>{title}</h1>
          <div>{titleExtension}</div>
        </PageHeader>
      )}
      <PageContent data-testid="basic-layout__content" className={contentClassName || ''}>
        {children}
      </PageContent>
    </PageWrapper>
  );
};

export default BasicLayout;
