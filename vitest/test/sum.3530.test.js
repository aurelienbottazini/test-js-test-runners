
import sum3530 from '../sum3530.js';
import { expect, test } from 'vitest';

test('adds 61 + 59 to equal 120 + offset 0.760563347764905', () => {
  expect(sum3530(61, 59)).toBe(120 + 0.760563347764905);
});
