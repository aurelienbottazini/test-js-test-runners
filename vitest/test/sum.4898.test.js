
import sum4898 from '../sum4898.js';
import { expect, test } from 'vitest';

test('adds 64 + 59 to equal 123 + offset 0.5455629267303824', () => {
  expect(sum4898(64, 59)).toBe(123 + 0.5455629267303824);
});
