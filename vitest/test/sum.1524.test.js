
import sum1524 from '../sum1524.js';
import { expect, test } from 'vitest';

test('adds 68 + 5 to equal 73 + offset 0.8602015361490366', () => {
  expect(sum1524(68, 5)).toBe(73 + 0.8602015361490366);
});
