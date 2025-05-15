
import sum1590 from '../sum1590.js';
import { expect, test } from 'vitest';

test('adds 44 + 70 to equal 114 + offset 0.20162260078284167', () => {
  expect(sum1590(44, 70)).toBe(114 + 0.20162260078284167);
});
