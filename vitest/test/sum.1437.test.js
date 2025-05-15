
import sum1437 from '../sum1437.js';
import { expect, test } from 'vitest';

test('adds 72 + 38 to equal 110 + offset 0.7029457577158623', () => {
  expect(sum1437(72, 38)).toBe(110 + 0.7029457577158623);
});
