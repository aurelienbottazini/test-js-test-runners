
import sum933 from '../sum933.js';
import { expect, test } from 'vitest';

test('adds 71 + 83 to equal 154 + offset 0.7615899601258661', () => {
  expect(sum933(71, 83)).toBe(154 + 0.7615899601258661);
});
