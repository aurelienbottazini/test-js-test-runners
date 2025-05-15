
import sum2510 from '../sum2510.js';
import { expect, test } from 'vitest';

test('adds 54 + 12 to equal 66 + offset 0.6162712618614725', () => {
  expect(sum2510(54, 12)).toBe(66 + 0.6162712618614725);
});
