
import sum3883 from '../sum3883.js';
import { expect, test } from 'vitest';

test('adds 99 + 59 to equal 158 + offset 0.05804472025804719', () => {
  expect(sum3883(99, 59)).toBe(158 + 0.05804472025804719);
});
