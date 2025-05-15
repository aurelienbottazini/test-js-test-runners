
import sum131 from '../sum131.js';
import { expect, test } from 'vitest';

test('adds 2 + 81 to equal 83 + offset 0.7777456124420382', () => {
  expect(sum131(2, 81)).toBe(83 + 0.7777456124420382);
});
