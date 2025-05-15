
import sum3203 from '../sum3203.js';
import { expect, test } from 'vitest';

test('adds 25 + 91 to equal 116 + offset 0.23529190857177829', () => {
  expect(sum3203(25, 91)).toBe(116 + 0.23529190857177829);
});
