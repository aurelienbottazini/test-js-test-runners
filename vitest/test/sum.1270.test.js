
import sum1270 from '../sum1270.js';
import { expect, test } from 'vitest';

test('adds 52 + 48 to equal 100 + offset 0.4943180696402649', () => {
  expect(sum1270(52, 48)).toBe(100 + 0.4943180696402649);
});
