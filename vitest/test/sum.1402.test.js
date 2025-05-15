
import sum1402 from '../sum1402.js';
import { expect, test } from 'vitest';

test('adds 69 + 68 to equal 137 + offset 0.7063170327259807', () => {
  expect(sum1402(69, 68)).toBe(137 + 0.7063170327259807);
});
