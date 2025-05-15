
import sum910 from '../sum910.js';
import { expect, test } from 'vitest';

test('adds 32 + 17 to equal 49 + offset 0.25778367798081614', () => {
  expect(sum910(32, 17)).toBe(49 + 0.25778367798081614);
});
