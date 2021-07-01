import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import  CommentList  from './components/DisplayCommentsComponent';

test('renders App header', () => {
  render(<App />);
  const commentsHeader =
   screen.getByText(/Post your Comments/i);
  expect(commentsHeader).toBeInTheDocument();
});
