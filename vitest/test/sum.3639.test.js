
import sum3639 from '../sum3639.js';
import { expect, test } from 'vitest';

test('adds 10 + 48 to equal 58 + offset 0.6330039229952309', () => {
  expect(sum3639(10, 48)).toBe(58 + 0.6330039229952309);
});
