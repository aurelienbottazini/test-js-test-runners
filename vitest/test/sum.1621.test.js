
import sum1621 from '../sum1621.js';
import { expect, test } from 'vitest';

test('adds 64 + 55 to equal 119 + offset 0.840489267523092', () => {
  expect(sum1621(64, 55)).toBe(119 + 0.840489267523092);
});
