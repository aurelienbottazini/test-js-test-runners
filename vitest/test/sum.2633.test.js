
import sum2633 from '../sum2633.js';
import { expect, test } from 'vitest';

test('adds 55 + 17 to equal 72 + offset 0.3935634814726465', () => {
  expect(sum2633(55, 17)).toBe(72 + 0.3935634814726465);
});
