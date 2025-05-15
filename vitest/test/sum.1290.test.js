
import sum1290 from '../sum1290.js';
import { expect, test } from 'vitest';

test('adds 29 + 22 to equal 51 + offset 0.6969686457588776', () => {
  expect(sum1290(29, 22)).toBe(51 + 0.6969686457588776);
});
