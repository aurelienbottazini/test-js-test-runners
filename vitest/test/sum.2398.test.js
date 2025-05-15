
import sum2398 from '../sum2398.js';
import { expect, test } from 'vitest';

test('adds 56 + 98 to equal 154 + offset 0.9555954341438447', () => {
  expect(sum2398(56, 98)).toBe(154 + 0.9555954341438447);
});
