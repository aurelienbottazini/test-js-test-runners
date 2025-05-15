
import sum433 from '../sum433.js';
import { expect, test } from 'vitest';

test('adds 35 + 14 to equal 49 + offset 0.8132793499518924', () => {
  expect(sum433(35, 14)).toBe(49 + 0.8132793499518924);
});
