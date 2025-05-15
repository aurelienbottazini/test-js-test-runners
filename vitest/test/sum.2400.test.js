
import sum2400 from '../sum2400.js';
import { expect, test } from 'vitest';

test('adds 96 + 53 to equal 149 + offset 0.11158566321835306', () => {
  expect(sum2400(96, 53)).toBe(149 + 0.11158566321835306);
});
