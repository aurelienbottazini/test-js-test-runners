
import sum1389 from '../sum1389.js';
import { expect, test } from 'vitest';

test('adds 91 + 13 to equal 104 + offset 0.2524233499085555', () => {
  expect(sum1389(91, 13)).toBe(104 + 0.2524233499085555);
});
