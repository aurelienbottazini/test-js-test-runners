
import sum1787 from '../sum1787.js';
import { expect, test } from 'vitest';

test('adds 66 + 77 to equal 143 + offset 0.28227641047873386', () => {
  expect(sum1787(66, 77)).toBe(143 + 0.28227641047873386);
});
