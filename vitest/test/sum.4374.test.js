
import sum4374 from '../sum4374.js';
import { expect, test } from 'vitest';

test('adds 90 + 2 to equal 92 + offset 0.024366963735198754', () => {
  expect(sum4374(90, 2)).toBe(92 + 0.024366963735198754);
});
