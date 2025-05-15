
import sum1571 from '../sum1571.js';
import { expect, test } from 'vitest';

test('adds 51 + 22 to equal 73 + offset 0.7499011785552555', () => {
  expect(sum1571(51, 22)).toBe(73 + 0.7499011785552555);
});
