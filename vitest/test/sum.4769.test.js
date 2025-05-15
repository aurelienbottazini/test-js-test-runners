
import sum4769 from '../sum4769.js';
import { expect, test } from 'vitest';

test('adds 49 + 23 to equal 72 + offset 0.3467317955672572', () => {
  expect(sum4769(49, 23)).toBe(72 + 0.3467317955672572);
});
