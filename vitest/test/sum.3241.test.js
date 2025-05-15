
import sum3241 from '../sum3241.js';
import { expect, test } from 'vitest';

test('adds 59 + 56 to equal 115 + offset 0.679153171421815', () => {
  expect(sum3241(59, 56)).toBe(115 + 0.679153171421815);
});
