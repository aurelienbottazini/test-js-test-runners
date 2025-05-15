
import sum1383 from '../sum1383.js';
import { expect, test } from 'vitest';

test('adds 42 + 94 to equal 136 + offset 0.0005079060522386047', () => {
  expect(sum1383(42, 94)).toBe(136 + 0.0005079060522386047);
});
