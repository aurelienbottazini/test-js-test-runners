
import sum2725 from '../sum2725.js';
import { expect, test } from 'vitest';

test('adds 76 + 43 to equal 119 + offset 0.6289178234963476', () => {
  expect(sum2725(76, 43)).toBe(119 + 0.6289178234963476);
});
