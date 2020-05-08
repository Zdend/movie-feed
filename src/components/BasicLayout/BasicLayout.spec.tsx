import React from 'react';
import { render } from '@testing-library/react';
import BasicLayout from './BasicLayout';

describe('BasicLayout', () => {
  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(
      <BasicLayout title="Hello title" titleExtension="I am extension">
        <span>Layout content</span>
      </BasicLayout>
    ));
  });

  it('renders title', () => {
    expect(getByTestId('basic-layout__title').textContent).toContain('Hello title');
  });

  it('renders title extension', () => {
    expect(getByTestId('basic-layout__title').textContent).toContain('I am extension');
  });

  it('renders content', () => {
    expect(getByTestId('basic-layout__content').textContent).toBe('Layout content');
  });
});
