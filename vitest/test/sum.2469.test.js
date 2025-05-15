
import sum2469 from '../sum2469.js';
import { expect, test } from 'vitest';

test('adds 4 + 76 to equal 80 + offset 0.2288504784116272', () => {
  expect(sum2469(4, 76)).toBe(80 + 0.2288504784116272);
});
