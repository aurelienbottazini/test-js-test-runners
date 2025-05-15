
import sum3216 from '../sum3216.js';
import { expect, test } from 'vitest';

test('adds 33 + 34 to equal 67 + offset 0.415211845360408', () => {
  expect(sum3216(33, 34)).toBe(67 + 0.415211845360408);
});
