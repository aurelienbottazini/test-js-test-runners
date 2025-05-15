
import sum1766 from '../sum1766.js';
import { expect, test } from 'vitest';

test('adds 3 + 81 to equal 84 + offset 0.8746653829067198', () => {
  expect(sum1766(3, 81)).toBe(84 + 0.8746653829067198);
});
