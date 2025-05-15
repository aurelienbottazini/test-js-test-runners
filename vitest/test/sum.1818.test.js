
import sum1818 from '../sum1818.js';
import { expect, test } from 'vitest';

test('adds 60 + 68 to equal 128 + offset 0.24162209481735375', () => {
  expect(sum1818(60, 68)).toBe(128 + 0.24162209481735375);
});
