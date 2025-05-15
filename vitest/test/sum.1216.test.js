
import sum1216 from '../sum1216.js';
import { expect, test } from 'vitest';

test('adds 48 + 36 to equal 84 + offset 0.7783046812777703', () => {
  expect(sum1216(48, 36)).toBe(84 + 0.7783046812777703);
});
