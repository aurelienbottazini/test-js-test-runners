
import sum2054 from '../sum2054.js';
import { expect, test } from 'vitest';

test('adds 58 + 51 to equal 109 + offset 0.6280294311880703', () => {
  expect(sum2054(58, 51)).toBe(109 + 0.6280294311880703);
});
