
import sum3827 from '../sum3827.js';
import { expect, test } from 'vitest';

test('adds 71 + 83 to equal 154 + offset 0.48425961821244135', () => {
  expect(sum3827(71, 83)).toBe(154 + 0.48425961821244135);
});
