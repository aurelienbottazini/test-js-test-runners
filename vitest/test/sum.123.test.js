
import sum123 from '../sum123.js';
import { expect, test } from 'vitest';

test('adds 71 + 6 to equal 77 + offset 0.879639539821772', () => {
  expect(sum123(71, 6)).toBe(77 + 0.879639539821772);
});
