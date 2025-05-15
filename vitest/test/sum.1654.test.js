
import sum1654 from '../sum1654.js';
import { expect, test } from 'vitest';

test('adds 36 + 79 to equal 115 + offset 0.4778985892446903', () => {
  expect(sum1654(36, 79)).toBe(115 + 0.4778985892446903);
});
