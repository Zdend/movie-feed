import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import ContentBox from '../ContentBox';
import Footer from '../Footer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const PageContent = styled.div`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;

interface BasicLayoutProps {
  title: string;
  children: React.ReactNode;
}

const BasicLayout = ({
  title,
  children,
  ...rest
}: BasicLayoutProps) => {
  return (
    <PageWrapper {...rest}>
      <Header title={title} data-testid="basic-layout__header" />
      <PageContent data-testid="basic-layout__content">
        <ContentBox>
          {children}
        </ContentBox>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
};

export default BasicLayout;
