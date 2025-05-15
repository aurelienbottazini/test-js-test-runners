
import sum1814 from '../sum1814.js';
import { expect, test } from 'vitest';

test('adds 23 + 75 to equal 98 + offset 0.6950253596396639', () => {
  expect(sum1814(23, 75)).toBe(98 + 0.6950253596396639);
});
