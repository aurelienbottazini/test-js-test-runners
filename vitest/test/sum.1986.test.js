
import sum1986 from '../sum1986.js';
import { expect, test } from 'vitest';

test('adds 16 + 40 to equal 56 + offset 0.2846119423601232', () => {
  expect(sum1986(16, 40)).toBe(56 + 0.2846119423601232);
});
