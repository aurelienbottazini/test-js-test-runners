
import sum4582 from '../sum4582.js';
import { expect, test } from 'vitest';

test('adds 68 + 92 to equal 160 + offset 0.9759137206041618', () => {
  expect(sum4582(68, 92)).toBe(160 + 0.9759137206041618);
});
