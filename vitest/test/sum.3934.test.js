
import sum3934 from '../sum3934.js';
import { expect, test } from 'vitest';

test('adds 66 + 34 to equal 100 + offset 0.9756503130173155', () => {
  expect(sum3934(66, 34)).toBe(100 + 0.9756503130173155);
});
