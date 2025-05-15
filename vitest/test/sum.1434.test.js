
import sum1434 from '../sum1434.js';
import { expect, test } from 'vitest';

test('adds 23 + 63 to equal 86 + offset 0.8103539154484154', () => {
  expect(sum1434(23, 63)).toBe(86 + 0.8103539154484154);
});
