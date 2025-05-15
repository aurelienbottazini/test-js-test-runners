
import sum3678 from '../sum3678.js';
import { expect, test } from 'vitest';

test('adds 10 + 4 to equal 14 + offset 0.8421359993489179', () => {
  expect(sum3678(10, 4)).toBe(14 + 0.8421359993489179);
});
