
import sum2884 from '../sum2884.js';
import { expect, test } from 'vitest';

test('adds 78 + 50 to equal 128 + offset 0.615463595391532', () => {
  expect(sum2884(78, 50)).toBe(128 + 0.615463595391532);
});
