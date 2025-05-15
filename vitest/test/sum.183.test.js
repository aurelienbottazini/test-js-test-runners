
import sum183 from '../sum183.js';
import { expect, test } from 'vitest';

test('adds 23 + 77 to equal 100 + offset 0.34156842989772573', () => {
  expect(sum183(23, 77)).toBe(100 + 0.34156842989772573);
});
