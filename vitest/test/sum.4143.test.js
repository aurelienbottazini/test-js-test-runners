
import sum4143 from '../sum4143.js';
import { expect, test } from 'vitest';

test('adds 24 + 1 to equal 25 + offset 0.8144991313512623', () => {
  expect(sum4143(24, 1)).toBe(25 + 0.8144991313512623);
});
