
import sum2348 from '../sum2348.js';
import { expect, test } from 'vitest';

test('adds 4 + 63 to equal 67 + offset 0.7136985201252677', () => {
  expect(sum2348(4, 63)).toBe(67 + 0.7136985201252677);
});
