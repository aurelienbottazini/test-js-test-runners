
import sum2450 from '../sum2450.js';
import { expect, test } from 'vitest';

test('adds 51 + 10 to equal 61 + offset 0.6342362439372253', () => {
  expect(sum2450(51, 10)).toBe(61 + 0.6342362439372253);
});
