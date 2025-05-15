
import sum2729 from '../sum2729.js';
import { expect, test } from 'vitest';

test('adds 91 + 11 to equal 102 + offset 0.38358158962072164', () => {
  expect(sum2729(91, 11)).toBe(102 + 0.38358158962072164);
});
