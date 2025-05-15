
import sum1929 from '../sum1929.js';
import { expect, test } from 'vitest';

test('adds 49 + 71 to equal 120 + offset 0.29889482749816587', () => {
  expect(sum1929(49, 71)).toBe(120 + 0.29889482749816587);
});
