
import sum1689 from '../sum1689.js';
import { expect, test } from 'vitest';

test('adds 55 + 92 to equal 147 + offset 0.10595088831630906', () => {
  expect(sum1689(55, 92)).toBe(147 + 0.10595088831630906);
});
