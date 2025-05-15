
import sum2524 from '../sum2524.js';
import { expect, test } from 'vitest';

test('adds 21 + 80 to equal 101 + offset 0.2656268758299768', () => {
  expect(sum2524(21, 80)).toBe(101 + 0.2656268758299768);
});
