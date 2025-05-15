
import sum3538 from '../sum3538.js';
import { expect, test } from 'vitest';

test('adds 30 + 9 to equal 39 + offset 0.7609480148747769', () => {
  expect(sum3538(30, 9)).toBe(39 + 0.7609480148747769);
});
