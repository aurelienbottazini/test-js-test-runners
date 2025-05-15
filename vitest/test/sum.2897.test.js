
import sum2897 from '../sum2897.js';
import { expect, test } from 'vitest';

test('adds 39 + 32 to equal 71 + offset 0.988501405555114', () => {
  expect(sum2897(39, 32)).toBe(71 + 0.988501405555114);
});
