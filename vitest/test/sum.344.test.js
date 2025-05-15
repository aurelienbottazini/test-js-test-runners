
import sum344 from '../sum344.js';
import { expect, test } from 'vitest';

test('adds 12 + 17 to equal 29 + offset 0.2894535395408895', () => {
  expect(sum344(12, 17)).toBe(29 + 0.2894535395408895);
});
