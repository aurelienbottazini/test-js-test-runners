
import sum4527 from '../sum4527.js';
import { expect, test } from 'vitest';

test('adds 73 + 8 to equal 81 + offset 0.14540798022625834', () => {
  expect(sum4527(73, 8)).toBe(81 + 0.14540798022625834);
});
