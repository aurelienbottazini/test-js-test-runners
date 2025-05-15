
import sum3379 from '../sum3379.js';
import { expect, test } from 'vitest';

test('adds 39 + 81 to equal 120 + offset 0.34542881646235957', () => {
  expect(sum3379(39, 81)).toBe(120 + 0.34542881646235957);
});
