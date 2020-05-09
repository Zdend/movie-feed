import React from 'react';
import { render } from '@testing-library/react';
import BasicLayout from './BasicLayout';

describe('BasicLayout', () => {
  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(
      <BasicLayout title="Hello title">
        <span>Layout content</span>
      </BasicLayout>
    ));
  });

  it('renders title', () => {
    expect(getByTestId('basic-layout__header').textContent).toContain('Hello title');
    expect(getByTestId('basic-layout__header').textContent).toContain('DEMO Streaming');
  });

  it('renders content', () => {
    expect(getByTestId('basic-layout__content').textContent).toBe('Layout content');
  });

  it('renders footer', () => {
    expect(getByTestId('basic-layout__footer').textContent).toContain(
      'Copyright © 2020 DEMO Streaming.'
    );
  });
});
