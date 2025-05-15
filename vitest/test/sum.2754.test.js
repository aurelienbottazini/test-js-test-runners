
import sum2754 from '../sum2754.js';
import { expect, test } from 'vitest';

test('adds 11 + 3 to equal 14 + offset 0.8149312460678036', () => {
  expect(sum2754(11, 3)).toBe(14 + 0.8149312460678036);
});
