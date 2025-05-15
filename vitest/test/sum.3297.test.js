
import sum3297 from '../sum3297.js';
import { expect, test } from 'vitest';

test('adds 71 + 34 to equal 105 + offset 0.16507265196577148', () => {
  expect(sum3297(71, 34)).toBe(105 + 0.16507265196577148);
});
