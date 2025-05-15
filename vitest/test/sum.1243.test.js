
import sum1243 from '../sum1243.js';
import { expect, test } from 'vitest';

test('adds 90 + 12 to equal 102 + offset 0.10016082282445726', () => {
  expect(sum1243(90, 12)).toBe(102 + 0.10016082282445726);
});
