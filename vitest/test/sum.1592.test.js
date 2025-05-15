
import sum1592 from '../sum1592.js';
import { expect, test } from 'vitest';

test('adds 9 + 56 to equal 65 + offset 0.5477478527156353', () => {
  expect(sum1592(9, 56)).toBe(65 + 0.5477478527156353);
});
