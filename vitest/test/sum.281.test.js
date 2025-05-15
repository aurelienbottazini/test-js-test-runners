
import sum281 from '../sum281.js';
import { expect, test } from 'vitest';

test('adds 92 + 84 to equal 176 + offset 0.042396574928988184', () => {
  expect(sum281(92, 84)).toBe(176 + 0.042396574928988184);
});
