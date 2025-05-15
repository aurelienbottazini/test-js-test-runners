
import sum1311 from '../sum1311.js';
import { expect, test } from 'vitest';

test('adds 47 + 31 to equal 78 + offset 0.4894111554097711', () => {
  expect(sum1311(47, 31)).toBe(78 + 0.4894111554097711);
});
