
import sum2592 from '../sum2592.js';
import { expect, test } from 'vitest';

test('adds 82 + 56 to equal 138 + offset 0.6380143021304095', () => {
  expect(sum2592(82, 56)).toBe(138 + 0.6380143021304095);
});
