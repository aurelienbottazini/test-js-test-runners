
import sum3453 from '../sum3453.js';
import { expect, test } from 'vitest';

test('adds 66 + 14 to equal 80 + offset 0.8940290714333541', () => {
  expect(sum3453(66, 14)).toBe(80 + 0.8940290714333541);
});
