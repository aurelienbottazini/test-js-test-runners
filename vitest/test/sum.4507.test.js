
import sum4507 from '../sum4507.js';
import { expect, test } from 'vitest';

test('adds 8 + 70 to equal 78 + offset 0.8676832301699255', () => {
  expect(sum4507(8, 70)).toBe(78 + 0.8676832301699255);
});
