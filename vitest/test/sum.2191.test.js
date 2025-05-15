
import sum2191 from '../sum2191.js';
import { expect, test } from 'vitest';

test('adds 8 + 48 to equal 56 + offset 0.7317110107235796', () => {
  expect(sum2191(8, 48)).toBe(56 + 0.7317110107235796);
});
