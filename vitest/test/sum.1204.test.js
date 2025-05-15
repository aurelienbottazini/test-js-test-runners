
import sum1204 from '../sum1204.js';
import { expect, test } from 'vitest';

test('adds 28 + 56 to equal 84 + offset 0.12779103511739953', () => {
  expect(sum1204(28, 56)).toBe(84 + 0.12779103511739953);
});
