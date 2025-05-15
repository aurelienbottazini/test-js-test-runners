
import sum368 from '../sum368.js';
import { expect, test } from 'vitest';

test('adds 56 + 57 to equal 113 + offset 0.03148902074581472', () => {
  expect(sum368(56, 57)).toBe(113 + 0.03148902074581472);
});
