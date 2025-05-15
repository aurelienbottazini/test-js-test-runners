
import sum1219 from '../sum1219.js';
import { expect, test } from 'vitest';

test('adds 35 + 6 to equal 41 + offset 0.9305765308934251', () => {
  expect(sum1219(35, 6)).toBe(41 + 0.9305765308934251);
});
