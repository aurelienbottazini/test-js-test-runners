
import sum4254 from '../sum4254.js';
import { expect, test } from 'vitest';

test('adds 67 + 64 to equal 131 + offset 0.632286032703255', () => {
  expect(sum4254(67, 64)).toBe(131 + 0.632286032703255);
});
