
import sum2344 from '../sum2344.js';
import { expect, test } from 'vitest';

test('adds 63 + 70 to equal 133 + offset 0.2707312497686769', () => {
  expect(sum2344(63, 70)).toBe(133 + 0.2707312497686769);
});
