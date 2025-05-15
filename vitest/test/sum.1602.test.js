
import sum1602 from '../sum1602.js';
import { expect, test } from 'vitest';

test('adds 20 + 62 to equal 82 + offset 0.48153732015012707', () => {
  expect(sum1602(20, 62)).toBe(82 + 0.48153732015012707);
});
