
import sum4568 from '../sum4568.js';
import { expect, test } from 'vitest';

test('adds 87 + 81 to equal 168 + offset 0.7564335842850609', () => {
  expect(sum4568(87, 81)).toBe(168 + 0.7564335842850609);
});
