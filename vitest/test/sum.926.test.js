
import sum926 from '../sum926.js';
import { expect, test } from 'vitest';

test('adds 40 + 10 to equal 50 + offset 0.20416537342998464', () => {
  expect(sum926(40, 10)).toBe(50 + 0.20416537342998464);
});
