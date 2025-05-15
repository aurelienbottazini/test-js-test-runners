
import sum532 from '../sum532.js';
import { expect, test } from 'vitest';

test('adds 54 + 53 to equal 107 + offset 0.963399882368123', () => {
  expect(sum532(54, 53)).toBe(107 + 0.963399882368123);
});
