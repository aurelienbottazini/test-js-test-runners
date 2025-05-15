
import sum2202 from '../sum2202.js';
import { expect, test } from 'vitest';

test('adds 36 + 22 to equal 58 + offset 0.8900015971671079', () => {
  expect(sum2202(36, 22)).toBe(58 + 0.8900015971671079);
});
