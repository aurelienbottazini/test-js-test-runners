
import sum3798 from '../sum3798.js';
import { expect, test } from 'vitest';

test('adds 37 + 16 to equal 53 + offset 0.7697376675469412', () => {
  expect(sum3798(37, 16)).toBe(53 + 0.7697376675469412);
});
