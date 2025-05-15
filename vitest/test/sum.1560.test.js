
import sum1560 from '../sum1560.js';
import { expect, test } from 'vitest';

test('adds 78 + 16 to equal 94 + offset 0.22122536335905596', () => {
  expect(sum1560(78, 16)).toBe(94 + 0.22122536335905596);
});
