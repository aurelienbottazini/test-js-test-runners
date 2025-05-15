
import sum2215 from '../sum2215.js';
import { expect, test } from 'vitest';

test('adds 53 + 23 to equal 76 + offset 0.09200294399555586', () => {
  expect(sum2215(53, 23)).toBe(76 + 0.09200294399555586);
});
