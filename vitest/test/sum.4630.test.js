
import sum4630 from '../sum4630.js';
import { expect, test } from 'vitest';

test('adds 36 + 25 to equal 61 + offset 0.736520365968664', () => {
  expect(sum4630(36, 25)).toBe(61 + 0.736520365968664);
});
