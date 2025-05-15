
import sum1767 from '../sum1767.js';
import { expect, test } from 'vitest';

test('adds 36 + 50 to equal 86 + offset 0.6150468897809275', () => {
  expect(sum1767(36, 50)).toBe(86 + 0.6150468897809275);
});
