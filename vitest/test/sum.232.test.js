
import sum232 from '../sum232.js';
import { expect, test } from 'vitest';

test('adds 83 + 13 to equal 96 + offset 0.11405681474528095', () => {
  expect(sum232(83, 13)).toBe(96 + 0.11405681474528095);
});
