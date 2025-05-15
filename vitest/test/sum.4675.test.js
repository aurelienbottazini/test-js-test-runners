
import sum4675 from '../sum4675.js';
import { expect, test } from 'vitest';

test('adds 60 + 47 to equal 107 + offset 0.00530956832435403', () => {
  expect(sum4675(60, 47)).toBe(107 + 0.00530956832435403);
});
