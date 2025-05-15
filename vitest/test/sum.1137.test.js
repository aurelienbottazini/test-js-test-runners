
import sum1137 from '../sum1137.js';
import { expect, test } from 'vitest';

test('adds 39 + 65 to equal 104 + offset 0.5555038814191189', () => {
  expect(sum1137(39, 65)).toBe(104 + 0.5555038814191189);
});
