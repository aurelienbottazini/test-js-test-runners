
import sum1351 from '../sum1351.js';
import { expect, test } from 'vitest';

test('adds 43 + 37 to equal 80 + offset 0.18974554582840086', () => {
  expect(sum1351(43, 37)).toBe(80 + 0.18974554582840086);
});
