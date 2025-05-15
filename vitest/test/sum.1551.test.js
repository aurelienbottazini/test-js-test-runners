
import sum1551 from '../sum1551.js';
import { expect, test } from 'vitest';

test('adds 54 + 92 to equal 146 + offset 0.06783514675104663', () => {
  expect(sum1551(54, 92)).toBe(146 + 0.06783514675104663);
});
