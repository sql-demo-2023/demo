import React from 'react';
import { render } from '@testing-library/react';

import FactFindingPage from '../src/pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FactFindingPage />);
    expect(baseElement).toBeTruthy();
  });
});
