
import sum4063 from '../sum4063.js';
import { expect, test } from 'vitest';

test('adds 39 + 68 to equal 107 + offset 0.12173209106790661', () => {
  expect(sum4063(39, 68)).toBe(107 + 0.12173209106790661);
});
