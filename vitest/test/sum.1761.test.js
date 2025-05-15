
import sum1761 from '../sum1761.js';
import { expect, test } from 'vitest';

test('adds 48 + 10 to equal 58 + offset 0.3663699905250527', () => {
  expect(sum1761(48, 10)).toBe(58 + 0.3663699905250527);
});
