
import sum3907 from '../sum3907.js';
import { expect, test } from 'vitest';

test('adds 39 + 61 to equal 100 + offset 0.016611812975561135', () => {
  expect(sum3907(39, 61)).toBe(100 + 0.016611812975561135);
});
