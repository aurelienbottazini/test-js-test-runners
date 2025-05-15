
import sum1412 from '../sum1412.js';
import { expect, test } from 'vitest';

test('adds 94 + 4 to equal 98 + offset 0.08371948227778525', () => {
  expect(sum1412(94, 4)).toBe(98 + 0.08371948227778525);
});
