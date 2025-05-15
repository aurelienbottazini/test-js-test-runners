
import sum818 from '../sum818.js';
import { expect, test } from 'vitest';

test('adds 43 + 41 to equal 84 + offset 0.07664323238427806', () => {
  expect(sum818(43, 41)).toBe(84 + 0.07664323238427806);
});
