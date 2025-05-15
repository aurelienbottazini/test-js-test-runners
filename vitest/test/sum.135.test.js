
import sum135 from '../sum135.js';
import { expect, test } from 'vitest';

test('adds 40 + 90 to equal 130 + offset 0.7012044471046321', () => {
  expect(sum135(40, 90)).toBe(130 + 0.7012044471046321);
});
