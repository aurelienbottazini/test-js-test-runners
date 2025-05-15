
import sum4915 from '../sum4915.js';
import { expect, test } from 'vitest';

test('adds 39 + 43 to equal 82 + offset 0.03694785955642099', () => {
  expect(sum4915(39, 43)).toBe(82 + 0.03694785955642099);
});
