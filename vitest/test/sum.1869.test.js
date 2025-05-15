
import sum1869 from '../sum1869.js';
import { expect, test } from 'vitest';

test('adds 52 + 13 to equal 65 + offset 0.38228018317233003', () => {
  expect(sum1869(52, 13)).toBe(65 + 0.38228018317233003);
});
