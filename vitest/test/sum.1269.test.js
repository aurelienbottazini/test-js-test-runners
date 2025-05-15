
import sum1269 from '../sum1269.js';
import { expect, test } from 'vitest';

test('adds 14 + 3 to equal 17 + offset 0.9568592128264127', () => {
  expect(sum1269(14, 3)).toBe(17 + 0.9568592128264127);
});
