
import sum3693 from '../sum3693.js';
import { expect, test } from 'vitest';

test('adds 76 + 5 to equal 81 + offset 0.2187179321795426', () => {
  expect(sum3693(76, 5)).toBe(81 + 0.2187179321795426);
});
