
import sum1060 from '../sum1060.js';
import { expect, test } from 'vitest';

test('adds 2 + 26 to equal 28 + offset 0.37326802142574844', () => {
  expect(sum1060(2, 26)).toBe(28 + 0.37326802142574844);
});
