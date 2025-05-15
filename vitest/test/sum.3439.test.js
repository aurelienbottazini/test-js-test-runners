
import sum3439 from '../sum3439.js';
import { expect, test } from 'vitest';

test('adds 39 + 13 to equal 52 + offset 0.28859293841384726', () => {
  expect(sum3439(39, 13)).toBe(52 + 0.28859293841384726);
});
