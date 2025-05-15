
import sum3670 from '../sum3670.js';
import { expect, test } from 'vitest';

test('adds 61 + 5 to equal 66 + offset 0.06352502149832073', () => {
  expect(sum3670(61, 5)).toBe(66 + 0.06352502149832073);
});
