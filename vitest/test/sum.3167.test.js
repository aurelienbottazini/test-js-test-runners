
import sum3167 from '../sum3167.js';
import { expect, test } from 'vitest';

test('adds 90 + 69 to equal 159 + offset 0.4001624813266117', () => {
  expect(sum3167(90, 69)).toBe(159 + 0.4001624813266117);
});
