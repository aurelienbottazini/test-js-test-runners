
import sum2747 from '../sum2747.js';
import { expect, test } from 'vitest';

test('adds 82 + 83 to equal 165 + offset 0.1899917384208044', () => {
  expect(sum2747(82, 83)).toBe(165 + 0.1899917384208044);
});
