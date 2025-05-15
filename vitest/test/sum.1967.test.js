
import sum1967 from '../sum1967.js';
import { expect, test } from 'vitest';

test('adds 98 + 40 to equal 138 + offset 0.08088809923361451', () => {
  expect(sum1967(98, 40)).toBe(138 + 0.08088809923361451);
});
