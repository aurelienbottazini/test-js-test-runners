
import sum2623 from '../sum2623.js';
import { expect, test } from 'vitest';

test('adds 25 + 83 to equal 108 + offset 0.10469014063736615', () => {
  expect(sum2623(25, 83)).toBe(108 + 0.10469014063736615);
});
