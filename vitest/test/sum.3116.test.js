
import sum3116 from '../sum3116.js';
import { expect, test } from 'vitest';

test('adds 54 + 75 to equal 129 + offset 0.5860965084092077', () => {
  expect(sum3116(54, 75)).toBe(129 + 0.5860965084092077);
});
