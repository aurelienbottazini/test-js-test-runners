
import sum2862 from '../sum2862.js';
import { expect, test } from 'vitest';

test('adds 25 + 34 to equal 59 + offset 0.16163709749396715', () => {
  expect(sum2862(25, 34)).toBe(59 + 0.16163709749396715);
});
