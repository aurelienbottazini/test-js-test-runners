
import sum593 from '../sum593.js';
import { expect, test } from 'vitest';

test('adds 10 + 85 to equal 95 + offset 0.06201706058950951', () => {
  expect(sum593(10, 85)).toBe(95 + 0.06201706058950951);
});
