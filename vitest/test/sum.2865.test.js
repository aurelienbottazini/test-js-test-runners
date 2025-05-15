
import sum2865 from '../sum2865.js';
import { expect, test } from 'vitest';

test('adds 30 + 47 to equal 77 + offset 0.3369704943249515', () => {
  expect(sum2865(30, 47)).toBe(77 + 0.3369704943249515);
});
