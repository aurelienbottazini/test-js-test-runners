
import sum3694 from '../sum3694.js';
import { expect, test } from 'vitest';

test('adds 99 + 68 to equal 167 + offset 0.1517968677298519', () => {
  expect(sum3694(99, 68)).toBe(167 + 0.1517968677298519);
});
