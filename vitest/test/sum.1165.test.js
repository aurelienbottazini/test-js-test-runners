
import sum1165 from '../sum1165.js';
import { expect, test } from 'vitest';

test('adds 41 + 18 to equal 59 + offset 0.8107101426022154', () => {
  expect(sum1165(41, 18)).toBe(59 + 0.8107101426022154);
});
