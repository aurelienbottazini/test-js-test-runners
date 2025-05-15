
import sum1832 from '../sum1832.js';
import { expect, test } from 'vitest';

test('adds 93 + 38 to equal 131 + offset 0.5817792527610548', () => {
  expect(sum1832(93, 38)).toBe(131 + 0.5817792527610548);
});
