
import sum2553 from '../sum2553.js';
import { expect, test } from 'vitest';

test('adds 84 + 45 to equal 129 + offset 0.13045281817789867', () => {
  expect(sum2553(84, 45)).toBe(129 + 0.13045281817789867);
});
