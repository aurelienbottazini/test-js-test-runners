
import sum1263 from '../sum1263.js';
import { expect, test } from 'vitest';

test('adds 50 + 99 to equal 149 + offset 0.8328368260506855', () => {
  expect(sum1263(50, 99)).toBe(149 + 0.8328368260506855);
});
