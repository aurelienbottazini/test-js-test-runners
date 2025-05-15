
import sum1764 from '../sum1764.js';
import { expect, test } from 'vitest';

test('adds 24 + 81 to equal 105 + offset 0.36661490222453896', () => {
  expect(sum1764(24, 81)).toBe(105 + 0.36661490222453896);
});
