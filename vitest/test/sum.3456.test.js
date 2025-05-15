
import sum3456 from '../sum3456.js';
import { expect, test } from 'vitest';

test('adds 4 + 23 to equal 27 + offset 0.503224458233978', () => {
  expect(sum3456(4, 23)).toBe(27 + 0.503224458233978);
});
