
import sum2586 from '../sum2586.js';
import { expect, test } from 'vitest';

test('adds 18 + 78 to equal 96 + offset 0.40109546422342657', () => {
  expect(sum2586(18, 78)).toBe(96 + 0.40109546422342657);
});
