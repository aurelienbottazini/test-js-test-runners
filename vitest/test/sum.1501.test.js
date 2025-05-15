
import sum1501 from '../sum1501.js';
import { expect, test } from 'vitest';

test('adds 25 + 23 to equal 48 + offset 0.713084434949785', () => {
  expect(sum1501(25, 23)).toBe(48 + 0.713084434949785);
});
