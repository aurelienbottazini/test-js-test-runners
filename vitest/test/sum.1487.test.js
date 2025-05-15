
import sum1487 from '../sum1487.js';
import { expect, test } from 'vitest';

test('adds 34 + 48 to equal 82 + offset 0.15719807717027545', () => {
  expect(sum1487(34, 48)).toBe(82 + 0.15719807717027545);
});
