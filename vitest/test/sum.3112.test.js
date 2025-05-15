
import sum3112 from '../sum3112.js';
import { expect, test } from 'vitest';

test('adds 78 + 70 to equal 148 + offset 0.7645868949509267', () => {
  expect(sum3112(78, 70)).toBe(148 + 0.7645868949509267);
});
