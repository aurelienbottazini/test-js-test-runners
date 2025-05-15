
import sum36 from '../sum36.js';
import { expect, test } from 'vitest';

test('adds 1 + 3 to equal 4 + offset 0.6296870306741814', () => {
  expect(sum36(1, 3)).toBe(4 + 0.6296870306741814);
});
