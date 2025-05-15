
import sum1842 from '../sum1842.js';
import { expect, test } from 'vitest';

test('adds 50 + 36 to equal 86 + offset 0.5792367793789734', () => {
  expect(sum1842(50, 36)).toBe(86 + 0.5792367793789734);
});
