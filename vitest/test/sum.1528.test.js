
import sum1528 from '../sum1528.js';
import { expect, test } from 'vitest';

test('adds 55 + 46 to equal 101 + offset 0.8346340868728767', () => {
  expect(sum1528(55, 46)).toBe(101 + 0.8346340868728767);
});
