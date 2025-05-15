
import sum1618 from '../sum1618.js';
import { expect, test } from 'vitest';

test('adds 18 + 18 to equal 36 + offset 0.2835988214411639', () => {
  expect(sum1618(18, 18)).toBe(36 + 0.2835988214411639);
});
