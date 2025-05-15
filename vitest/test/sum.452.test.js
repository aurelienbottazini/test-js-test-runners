
import sum452 from '../sum452.js';
import { expect, test } from 'vitest';

test('adds 60 + 35 to equal 95 + offset 0.5057062225939063', () => {
  expect(sum452(60, 35)).toBe(95 + 0.5057062225939063);
});
