
import sum2358 from '../sum2358.js';
import { expect, test } from 'vitest';

test('adds 7 + 56 to equal 63 + offset 0.8394006835570711', () => {
  expect(sum2358(7, 56)).toBe(63 + 0.8394006835570711);
});
