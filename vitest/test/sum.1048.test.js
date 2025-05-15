
import sum1048 from '../sum1048.js';
import { expect, test } from 'vitest';

test('adds 12 + 19 to equal 31 + offset 0.7545614022476765', () => {
  expect(sum1048(12, 19)).toBe(31 + 0.7545614022476765);
});
