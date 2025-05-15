
import sum2777 from '../sum2777.js';
import { expect, test } from 'vitest';

test('adds 31 + 12 to equal 43 + offset 0.042716680042176214', () => {
  expect(sum2777(31, 12)).toBe(43 + 0.042716680042176214);
});
