
import sum2930 from '../sum2930.js';
import { expect, test } from 'vitest';

test('adds 58 + 44 to equal 102 + offset 0.24802528009752223', () => {
  expect(sum2930(58, 44)).toBe(102 + 0.24802528009752223);
});
