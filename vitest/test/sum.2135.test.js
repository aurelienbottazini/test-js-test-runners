
import sum2135 from '../sum2135.js';
import { expect, test } from 'vitest';

test('adds 55 + 27 to equal 82 + offset 0.27913314813310286', () => {
  expect(sum2135(55, 27)).toBe(82 + 0.27913314813310286);
});
