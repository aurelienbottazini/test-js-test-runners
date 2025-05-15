
import sum3744 from '../sum3744.js';
import { expect, test } from 'vitest';

test('adds 32 + 70 to equal 102 + offset 0.46926601177719984', () => {
  expect(sum3744(32, 70)).toBe(102 + 0.46926601177719984);
});
