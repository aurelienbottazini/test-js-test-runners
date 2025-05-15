
import sum1687 from '../sum1687.js';
import { expect, test } from 'vitest';

test('adds 0 + 49 to equal 49 + offset 0.8115962387112412', () => {
  expect(sum1687(0, 49)).toBe(49 + 0.8115962387112412);
});
