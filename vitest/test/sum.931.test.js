
import sum931 from '../sum931.js';
import { expect, test } from 'vitest';

test('adds 6 + 58 to equal 64 + offset 0.09394985570093595', () => {
  expect(sum931(6, 58)).toBe(64 + 0.09394985570093595);
});
