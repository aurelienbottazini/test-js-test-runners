
import sum2566 from '../sum2566.js';
import { expect, test } from 'vitest';

test('adds 63 + 17 to equal 80 + offset 0.3976642984058222', () => {
  expect(sum2566(63, 17)).toBe(80 + 0.3976642984058222);
});
