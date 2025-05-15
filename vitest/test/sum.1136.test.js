
import sum1136 from '../sum1136.js';
import { expect, test } from 'vitest';

test('adds 94 + 49 to equal 143 + offset 0.8356459564892493', () => {
  expect(sum1136(94, 49)).toBe(143 + 0.8356459564892493);
});
