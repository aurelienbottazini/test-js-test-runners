
import sum308 from '../sum308.js';
import { expect, test } from 'vitest';

test('adds 58 + 92 to equal 150 + offset 0.04136424729052768', () => {
  expect(sum308(58, 92)).toBe(150 + 0.04136424729052768);
});
