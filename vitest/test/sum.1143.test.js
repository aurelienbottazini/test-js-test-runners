
import sum1143 from '../sum1143.js';
import { expect, test } from 'vitest';

test('adds 23 + 9 to equal 32 + offset 0.3293757992681299', () => {
  expect(sum1143(23, 9)).toBe(32 + 0.3293757992681299);
});
