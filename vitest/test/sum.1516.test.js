
import sum1516 from '../sum1516.js';
import { expect, test } from 'vitest';

test('adds 52 + 42 to equal 94 + offset 0.7275704533249139', () => {
  expect(sum1516(52, 42)).toBe(94 + 0.7275704533249139);
});
