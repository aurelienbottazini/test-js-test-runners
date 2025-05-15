
import sum1026 from '../sum1026.js';
import { expect, test } from 'vitest';

test('adds 2 + 66 to equal 68 + offset 0.8751663325029414', () => {
  expect(sum1026(2, 66)).toBe(68 + 0.8751663325029414);
});
