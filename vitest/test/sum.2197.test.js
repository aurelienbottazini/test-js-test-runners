
import sum2197 from '../sum2197.js';
import { expect, test } from 'vitest';

test('adds 43 + 54 to equal 97 + offset 0.9768403887327471', () => {
  expect(sum2197(43, 54)).toBe(97 + 0.9768403887327471);
});
