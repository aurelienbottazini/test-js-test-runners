
import sum1784 from '../sum1784.js';
import { expect, test } from 'vitest';

test('adds 51 + 17 to equal 68 + offset 0.767285398076334', () => {
  expect(sum1784(51, 17)).toBe(68 + 0.767285398076334);
});
