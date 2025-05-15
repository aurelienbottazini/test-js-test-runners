
import sum4521 from '../sum4521.js';
import { expect, test } from 'vitest';

test('adds 95 + 54 to equal 149 + offset 0.317769429822394', () => {
  expect(sum4521(95, 54)).toBe(149 + 0.317769429822394);
});
