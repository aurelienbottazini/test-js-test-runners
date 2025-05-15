
import sum1841 from '../sum1841.js';
import { expect, test } from 'vitest';

test('adds 97 + 94 to equal 191 + offset 0.41924779192951345', () => {
  expect(sum1841(97, 94)).toBe(191 + 0.41924779192951345);
});
