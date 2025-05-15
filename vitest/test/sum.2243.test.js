
import sum2243 from '../sum2243.js';
import { expect, test } from 'vitest';

test('adds 97 + 39 to equal 136 + offset 0.33664080945060426', () => {
  expect(sum2243(97, 39)).toBe(136 + 0.33664080945060426);
});
