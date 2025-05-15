
import sum1900 from '../sum1900.js';
import { expect, test } from 'vitest';

test('adds 92 + 55 to equal 147 + offset 0.1571888082568107', () => {
  expect(sum1900(92, 55)).toBe(147 + 0.1571888082568107);
});
