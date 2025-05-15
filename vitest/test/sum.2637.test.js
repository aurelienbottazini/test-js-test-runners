
import sum2637 from '../sum2637.js';
import { expect, test } from 'vitest';

test('adds 22 + 48 to equal 70 + offset 0.09837395596698195', () => {
  expect(sum2637(22, 48)).toBe(70 + 0.09837395596698195);
});
