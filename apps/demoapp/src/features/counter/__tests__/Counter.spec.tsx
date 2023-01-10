import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from '../../../store/store';
import Counter from '../Counter';
jest.mock('./counterAPI', () => ({
  fetchCount: (amount: number) =>
    new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    ),
}));

describe('<Counter />', () => {
  it('renders the component', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
