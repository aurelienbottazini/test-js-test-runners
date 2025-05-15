
import sum607 from '../sum607.js';
import { expect, test } from 'vitest';

test('adds 95 + 5 to equal 100 + offset 0.9011798035157246', () => {
  expect(sum607(95, 5)).toBe(100 + 0.9011798035157246);
});
