
import sum1283 from '../sum1283.js';
import { expect, test } from 'vitest';

test('adds 1 + 61 to equal 62 + offset 0.7045092786333313', () => {
  expect(sum1283(1, 61)).toBe(62 + 0.7045092786333313);
});
