import { renderHook } from '@testing-library/react-hooks';
import { useSentimentAnalysis } from '../src/hooks';

test('useSentimentAnalysis', () => {
  let text = '';
  const { result, rerender } = renderHook(() => useSentimentAnalysis(text));
  expect(result.current.score).toBe(0);
  text = 'hell';
  rerender();
  expect(result.current.score).toBeLessThan(0);
  text = 'hello great friend';
  rerender();
  expect(result.current.score).toBeGreaterThan(0);
});
