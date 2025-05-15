
import sum3372 from '../sum3372.js';
import { expect, test } from 'vitest';

test('adds 64 + 3 to equal 67 + offset 0.58459952029781', () => {
  expect(sum3372(64, 3)).toBe(67 + 0.58459952029781);
});
