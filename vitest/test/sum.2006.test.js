
import sum2006 from '../sum2006.js';
import { expect, test } from 'vitest';

test('adds 72 + 10 to equal 82 + offset 0.3627156006461376', () => {
  expect(sum2006(72, 10)).toBe(82 + 0.3627156006461376);
});
