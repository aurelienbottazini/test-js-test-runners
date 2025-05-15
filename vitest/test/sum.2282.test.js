
import sum2282 from '../sum2282.js';
import { expect, test } from 'vitest';

test('adds 33 + 44 to equal 77 + offset 0.198457370800607', () => {
  expect(sum2282(33, 44)).toBe(77 + 0.198457370800607);
});
