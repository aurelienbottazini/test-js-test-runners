
import sum2832 from '../sum2832.js';
import { expect, test } from 'vitest';

test('adds 82 + 43 to equal 125 + offset 0.7069454302387017', () => {
  expect(sum2832(82, 43)).toBe(125 + 0.7069454302387017);
});
