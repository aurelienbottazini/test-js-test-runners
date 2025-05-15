
import sum1615 from '../sum1615.js';
import { expect, test } from 'vitest';

test('adds 51 + 72 to equal 123 + offset 0.7279505136228642', () => {
  expect(sum1615(51, 72)).toBe(123 + 0.7279505136228642);
});
