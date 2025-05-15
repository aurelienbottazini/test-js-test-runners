
import sum1378 from '../sum1378.js';
import { expect, test } from 'vitest';

test('adds 7 + 62 to equal 69 + offset 0.9572410936257411', () => {
  expect(sum1378(7, 62)).toBe(69 + 0.9572410936257411);
});
