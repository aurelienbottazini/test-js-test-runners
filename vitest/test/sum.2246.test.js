
import sum2246 from '../sum2246.js';
import { expect, test } from 'vitest';

test('adds 61 + 75 to equal 136 + offset 0.23557965621454624', () => {
  expect(sum2246(61, 75)).toBe(136 + 0.23557965621454624);
});
