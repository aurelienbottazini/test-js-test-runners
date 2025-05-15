
import sum2118 from '../sum2118.js';
import { expect, test } from 'vitest';

test('adds 4 + 54 to equal 58 + offset 0.4013262844687261', () => {
  expect(sum2118(4, 54)).toBe(58 + 0.4013262844687261);
});
