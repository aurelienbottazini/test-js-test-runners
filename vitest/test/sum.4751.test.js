
import sum4751 from '../sum4751.js';
import { expect, test } from 'vitest';

test('adds 24 + 35 to equal 59 + offset 0.14381435572314327', () => {
  expect(sum4751(24, 35)).toBe(59 + 0.14381435572314327);
});
