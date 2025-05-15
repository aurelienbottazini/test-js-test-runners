
import sum462 from '../sum462.js';
import { expect, test } from 'vitest';

test('adds 48 + 55 to equal 103 + offset 0.9225938460962271', () => {
  expect(sum462(48, 55)).toBe(103 + 0.9225938460962271);
});
