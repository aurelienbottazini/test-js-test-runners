
import sum1747 from '../sum1747.js';
import { expect, test } from 'vitest';

test('adds 3 + 72 to equal 75 + offset 0.7916814660043473', () => {
  expect(sum1747(3, 72)).toBe(75 + 0.7916814660043473);
});
