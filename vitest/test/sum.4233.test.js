
import sum4233 from '../sum4233.js';
import { expect, test } from 'vitest';

test('adds 64 + 79 to equal 143 + offset 0.237908520806286', () => {
  expect(sum4233(64, 79)).toBe(143 + 0.237908520806286);
});
