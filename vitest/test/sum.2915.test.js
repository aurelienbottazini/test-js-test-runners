
import sum2915 from '../sum2915.js';
import { expect, test } from 'vitest';

test('adds 77 + 69 to equal 146 + offset 0.572712409916746', () => {
  expect(sum2915(77, 69)).toBe(146 + 0.572712409916746);
});
