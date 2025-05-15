
import sum1110 from '../sum1110.js';
import { expect, test } from 'vitest';

test('adds 98 + 52 to equal 150 + offset 0.7785981584977366', () => {
  expect(sum1110(98, 52)).toBe(150 + 0.7785981584977366);
});
