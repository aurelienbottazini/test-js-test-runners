
import sum3311 from '../sum3311.js';
import { expect, test } from 'vitest';

test('adds 92 + 22 to equal 114 + offset 0.2767214269994587', () => {
  expect(sum3311(92, 22)).toBe(114 + 0.2767214269994587);
});
