
import sum253 from '../sum253.js';
import { expect, test } from 'vitest';

test('adds 75 + 69 to equal 144 + offset 0.30127516382154473', () => {
  expect(sum253(75, 69)).toBe(144 + 0.30127516382154473);
});
