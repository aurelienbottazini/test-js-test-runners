
import sum3871 from '../sum3871.js';
import { expect, test } from 'vitest';

test('adds 34 + 31 to equal 65 + offset 0.8720308348537779', () => {
  expect(sum3871(34, 31)).toBe(65 + 0.8720308348537779);
});
