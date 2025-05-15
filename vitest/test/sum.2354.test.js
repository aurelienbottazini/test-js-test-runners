
import sum2354 from '../sum2354.js';
import { expect, test } from 'vitest';

test('adds 51 + 81 to equal 132 + offset 0.08537319303028124', () => {
  expect(sum2354(51, 81)).toBe(132 + 0.08537319303028124);
});
